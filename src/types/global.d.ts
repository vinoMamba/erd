declare type Nullable<T> = T | null

declare type Recordable<T = any> = Record<string, T>

declare interface EnvConf {
  VITE_PORT: number
  VITE_PROXY: [string, string][]
  VITE_TITLE: string
  VITE_API_URL: string
}

