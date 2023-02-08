import type { AxiosTransform } from './axiosTransform'
import { HttpClient } from './httpClient'

const transform: AxiosTransform = {
  transformResponseHook: (res, options) => {
    const { useNativeResponse } = options
    if (useNativeResponse)
      return res

    const { data } = res
    return data
  },
  beforeRequestHook: (config, options) => {
    const { useToken } = options
    // TODO: you should get token from cookie or localStorage
    const token = 'token'
    if (useToken && token)
      (config as Recordable).headers.Authorization = `Bearer ${token}`

    return config
  },
}

function createHttp() {
  return new HttpClient({
    baseURL: import.meta.env.VITE_API_URL,
    transform,
    requestOptions: {
      useNativeResponse: false,
      useToken: true,
    },
  })
}

export const http = createHttp()
