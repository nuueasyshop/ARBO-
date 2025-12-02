// Reference to vite/client removed to resolve "Cannot find type definition" error
interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_GOOGLE_ADS_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}