export interface LoginParams {
  username: string
  password: string
  grant_type: string
  scope: string
}

export interface LoginResult {
  access_token: string
  expires_in: number
  jti: string
  refresh_token: string
  scope: string
  source: string
  token_type: string
}
