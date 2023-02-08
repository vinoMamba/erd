declare interface Result<T = any> {
  code: number
  data: T
  message: string
}

export interface RequestOptions {
  // ether use native response or not
  useNativeResponse?: boolean
  // ether use token or not
  useToken?: boolean
}
