# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Documentation Structure

- [API Specifications](./api-specs/README.md) - OpenAPI specifications for json-rpc APIs and how to autogenerate documentation

## Working with API Documentation

This project uses OpenAPI specifications to generate API documentation. When adding new API specs:

1. First, generate the API documentation:

   ```
   yarn openapi:generate:all            # Generate all API docs
   # OR for specific namespaces
   yarn docusaurus gen-api-docs eth # Generate Ethereum API docs
   yarn docusaurus gen-api-docs zkevm    # Generate zkEVM API docs
   yarn docusaurus gen-api-docs txpool   # Generate txpool API docs
   ```

2. Then start the development server:
   ```
   yarn start
   ```

This ensures all referenced documentation files exist before the server starts.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
