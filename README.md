# Blog of The system of personal freedom

Short url to the recent page is `/0?ru`.

## Run

Use node version: 18 or greater

- Install dependencies:

  ```bash
  pnpm i
  pnpm link vitepress-sls-blog-tmpl
  ```

- Run locally:

  ```bash
  pnpm dev
  ```

  Go to `http://localhost:5173/`

- Build and Preview

  ```bash
  pnpm build && pnpm preview
  ```

  Go to `http://localhost:4173/`

  Local admin panel is on `http://localhost:4173/admin/`

## Cloudflare

Preview before upload:

```
pnpm cf:dev
```

To upload to worker run:

```
pnpm cf:deploy
```
