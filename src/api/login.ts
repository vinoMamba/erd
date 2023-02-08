import { http } from '../shared/http'
import type { LoginParams, LoginResult } from './types/login'

export function login(params: LoginParams) {
  return http.get<LoginResult>({
    url: '/oauth/token',
    params,
    headers: {
      Authorization: 'Basic Y2xpZW50MToxMjM0NTY=',
    },
  })
}
