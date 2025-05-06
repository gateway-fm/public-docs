/**
 * This script injects the ApiMethodList component into the auto-generated API introduction pages.
 * Run this script after generating the OpenAPI docs.
 */
const fs = require("fs");
const path = require("path");

// Paths to the API info pages
const apiInfoPages = [
  {
    path: "docs/cdk-erigon/json-rpc/eth/ethereum-json-rpc-api.info.mdx",
    apiName: "eth",
  },
  {
    path: "docs/cdk-erigon/json-rpc/txpool/txpool-json-rpc-api.info.mdx",
    apiName: "txpool",
  },
  {
    path: "docs/cdk-erigon/json-rpc/zkevm/polygon-zkevm-node-api.info.mdx",
    apiName: "zkevm",
  },
];

// Process each file
apiInfoPages.forEach(({ path: filePath, apiName }) => {
  try {
    // Get the absolute path
    const absolutePath = path.resolve(filePath);

    if (fs.existsSync(absolutePath)) {
      // Read the file content
      let content = fs.readFileSync(absolutePath, "utf8");

      // Remove any existing ApiMethodList imports
      content = content.replace(/import ApiMethodList from "@theme\/ApiMethodList";/g, "");

      // Split the content into frontmatter and body
      const parts = content.split("---");
      if (parts.length < 3) {
        console.error(`Invalid MDX format in ${filePath}`);
        return;
      }

      // Extract parts
      const frontmatter = parts[1];
      let body = parts.slice(2).join("---").trim();

      // Clean up excessive newlines in the body
      body = body.replace(/\n{3,}/g, "\n\n");

      // Parse the imports section
      const importLines = [];
      const bodyLines = body.split("\n");
      let nonImportStart = 0;

      // Collect all import statements
      for (let i = 0; i < bodyLines.length; i++) {
        const line = bodyLines[i].trim();
        if (line.startsWith("import ") && line.includes(" from ")) {
          importLines.push(line);
          nonImportStart = i + 1;
        } else if (line !== "" && nonImportStart === 0) {
          nonImportStart = i;
          break;
        }
      }

      // Add ApiMethodList import if it doesn't exist
      if (!importLines.some((line) => line.includes("ApiMethodList"))) {
        importLines.push('import ApiMethodList from "@theme/ApiMethodList";');
      }

      // Reconstruct the body with clean imports
      const cleanImports = importLines.join("\n");
      const cleanBody = bodyLines.slice(nonImportStart).join("\n");

      // Check if the component is already injected
      const methodListTag = `<ApiMethodList apiName="${apiName}" />`;
      let finalBody = cleanBody;

      if (!finalBody.includes("<ApiMethodList")) {
        // Find the description paragraph which usually comes after the heading
        const headingEndIndex = finalBody.indexOf("</Heading>");

        if (headingEndIndex !== -1) {
          // Search for the next paragraph after the heading
          const paragraphStart = finalBody.indexOf("\n\n", headingEndIndex);
          const paragraphEnd = finalBody.indexOf("\n\n", paragraphStart + 2);

          // Insert the component after the description paragraph
          if (paragraphEnd !== -1) {
            finalBody =
              finalBody.slice(0, paragraphEnd) +
              "\n\n" +
              methodListTag +
              finalBody.slice(paragraphEnd);
          } else {
            // If no clear paragraph end, append to the end of the file
            finalBody += "\n\n" + methodListTag;
          }
        } else {
          // If no clear structure, just append to the end
          finalBody += "\n\n" + methodListTag;
        }
      }

      // Reassemble the file with clean formatting
      const newContent = `---${frontmatter}---\n\n${cleanImports}\n\n${finalBody}`;

      // Write the modified content back to the file
      fs.writeFileSync(absolutePath, newContent, "utf8");
      console.log(`Successfully injected ApiMethodList into ${filePath}`);
    } else {
      console.error(`File not found: ${absolutePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
});

console.log("API method list injection completed!");
