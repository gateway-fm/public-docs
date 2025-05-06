# API Specifications

This directory contains OpenAPI specifications for the various json-rpc APIs supported by cdk-erigon.

## Overview

- `cdk-erigon.yaml`: Ethereum JSON-RPC API methods
- `zkevm-methods.yaml`: Polygon zkEVM-specific json-rpc API methods
- `txpool.yaml`: Transaction pool API methods

## Auto generating Documentation

The documentation for these APIs is automatically generated using the [docusaurus-plugin-openapi-docs](https://github.com/PaloAltoNetworks/docusaurus-openapi) plugin. When you add or modify an API specification, the documentation will be regenerated when the site is built.

### Important: Order of Operations

When adding a new API namespace, you must follow this sequence:

1. Create the OpenAPI specification file
2. Update Docusaurus configuration
3. **Generate the API documentation** using the appropriate npm script
4. Create and update the sidebar configurations
5. Start the development server

If you reference documentation files in the sidebar before generating them, you will encounter errors when starting the development server.

### How to Add a New API Namespace

1. **Create a new OpenAPI specification file**:

   - Create a YAML file in the `api-specs` directory (e.g., `new-namespace.yaml`)
   - Define your API endpoints following the OpenAPI 3.0 format
   - Use consistent tagging to group related methods

2. **Update the Docusaurus configuration**:

   - Open `docusaurus.config.ts`
   - Add a new entry to the `plugins` section under `docusaurus-plugin-openapi-docs`:

   ```typescript
   newNamespace: {
     specPath: "api-specs/new-namespace.yaml",
     outputDir: "docs/cdk-erigon/json-rpc/new-namespace",
     sidebarOptions: {
       groupPathsBy: "tag",
     },
   } satisfies OpenApiPlugin.Options,
   ```

3. **Create a sidebar file**:

   - Create a new file at `docs/cdk-erigon/json-rpc/new-namespace/sidebar.ts`
   - Define the sidebar structure following the pattern in other sidebars

   ```typescript
   import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

   const sidebar: SidebarsConfig = {
     apisidebar: [
       {
         type: "doc",
         id: "cdk-erigon/json-rpc/new-namespace/new-namespace-json-rpc-api",
       },
       // Add categories for the API methods grouped by tag
     ],
   };

   export default sidebar.apisidebar;
   ```

4. **Update the main sidebar**:

   - Open `sidebars.ts` in the root directory
   - Import your new sidebar:
     ```typescript
     import newNamespaceSidebar from "./docs/cdk-erigon/json-rpc/new-namespace/sidebar";
     ```
   - Add it to the json-rpc section:
     ```typescript
     {
       type: 'category',
       label: 'new-namespace',
       collapsed: true,
       link: {
         type: 'doc',
         id: 'cdk-erigon/json-rpc/new-namespace/new-namespace-json-rpc-api',
       },
       items: newNamespaceSidebar,
     },
     ```

5. **Generate the documentation**:
   - Run the docusaurus OpenAPI generator:
     ```bash
     yarn docusaurus gen-api-docs new-namespace
     # where new-namespace is the key you added in docusaurus.config.ts
     ```
   - Or rebuild the entire site:
     ```bash
     yarn build
     ```

### Structure of an OpenAPI Spec

Each API spec should follow this basic structure:

```yaml
openapi: 3.0.0
info:
  title: Your API Name
  version: 1.0.0
  description: Description of your API
servers:
  - url: https://example.com
paths:
  /method_name:
    post:
      tags:
        - Method Category
      summary: method_name
      operationId: method_name
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              # Define request parameters
      responses:
        "200":
          description: Description of the response
          content:
            application/json:
              schema:
                type: object
                # Define response structure
tags:
  - name: Method Category
    description: Description of this category of methods
```

### Tips for Writing Good API Specs

1. **Use clear and consistent naming** for methods and parameters
2. **Group related methods with tags** for better organization
3. **Include detailed descriptions** for each method, parameter, and response
4. **Provide examples** where helpful to demonstrate usage
5. **Be consistent across namespaces** for a unified documentation experience
