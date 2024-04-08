declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_SUPABASE_URL: string;
    readonly NEXT_PUBLIC_SERVICE_ROLE_KEY: string;
  }
}
