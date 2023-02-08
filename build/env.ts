import { loadEnv } from 'vite'

export function parseEnv(mode: string): EnvConf {
  const envConf = {}
  const envConfig = loadEnv(mode, process.cwd())
  for (const key of Object.keys(envConfig)) {
    const realValue = envConfig[key] === 'true' ? true : envConfig[key] === 'false' ? false : envConfig[key]
    if (key === 'VITE_PORT' && realValue)
      envConf[key] = Number(envConfig[key])
    if (key === 'VITE_PROXY' && realValue)
      envConf[key] = JSON.parse(envConfig[key].replace(/'/g, '"'))
    else
      envConf[key] = envConfig[key]
  }
  return envConf as EnvConf
}
