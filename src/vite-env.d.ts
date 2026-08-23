/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL_CLOUDFLARE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}