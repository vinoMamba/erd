import useSWR from 'swr'
import type { LoginParams, LoginResult } from '../api/types/login'
import { http } from '../shared/http'

export function useLogin(params: LoginParams) {
  const fetcher = async (url: string, params: LoginParams) => {
    return await http.get<LoginResult>({
      url,
      params,
      headers: {
        Authorization: 'Basic Y2xpZW50MToxMjM0NTY=',
      },
    })
  }
  const { data, error, mutate } = useSWR(
    ['/oauth/token', params],
    (url: string, params: LoginParams) => fetcher(url, params))
  return {
    userInfo: data,
    error,
    mutate,
  }
}
