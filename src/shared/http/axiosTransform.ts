import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestOptions, Result } from '../../types/axios'

export interface AxiosOptions extends AxiosRequestConfig {
  transform: AxiosTransform
  requestOptions: RequestOptions
}
export abstract class AxiosTransform {
  transformResponseHook?: (res: AxiosResponse<Result>, options: RequestOptions) => any
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig
}
