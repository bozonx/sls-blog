[![Netlify Status](https://api.netlify.com/api/v1/badges/18fe20b9-c449-4119-af07-6b3826eeacfd/deploy-status)](https://app.netlify.com/sites/sls-blog/deploys)

# Blog of The system of personal freedom

## Run

Use node version: 18 or greater

- Install dependencies:

  ```bash
  yarn
  ```

- Run locally:

  ```bash
  yarn dev
  ```

  Go to `http://localhost:5173/`

- Build and Preview

  ```bash
  yarn build && yarn preview
  ```

  Go to `http://localhost:4173/`

  Local admin panel is on `http://localhost:4173/admin/`

## Cloudflare

```
pnpm cf:deploy
```
