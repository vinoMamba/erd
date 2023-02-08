import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import type { RequestOptions, Result } from '../../types/axios'
import type { AxiosOptions } from './axiosTransform'

export class HttpClient {
  private instance: AxiosInstance
  private readonly options: AxiosOptions
  constructor(options: AxiosOptions) {
    this.options = options
    this.instance = axios.create(options)
    this.setupInterceptors()
  }

  private getTransform() {
    const { transform } = this.options
    return transform
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use()
    this.instance.interceptors.response.use()
  }

  private async request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    const transform = this.getTransform()
    const opt: RequestOptions = Object.assign({}, this.options.requestOptions, options)
    const { transformResponseHook } = transform
    return new Promise((resolve, reject) => {
      return this.instance
        .request<any, AxiosResponse<Result>>(config)
        .then((res: AxiosResponse<Result>) => {
          if (transformResponseHook && typeof transformResponseHook === 'function') {
            try {
              const ret = transformResponseHook(res, opt)
              resolve(ret)
            }
            catch (error) {
              reject(error)
            }
          }
          resolve(res as unknown as Promise<T>)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  post<T>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' }, options)
  }

  get<T>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' }, options)
  }

  delete<T>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' }, options)
  }

  put<T>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' }, options)
  }
}
