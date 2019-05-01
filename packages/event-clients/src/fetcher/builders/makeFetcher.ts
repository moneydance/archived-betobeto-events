import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'

const defaultConfig: AxiosRequestConfig = {
  timeout: 5000,
  paramsSerializer: qs.stringify,
}

export const makeFetcher = (config: AxiosRequestConfig) => {
  const http = axios.create({
    ...defaultConfig,
    ...config,
  })
  return http
}
