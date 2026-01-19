import axios, { AxiosError } from 'axios'
import { locale } from '@/i18n'
import { Entry } from './entry'
import { User } from './user'

class Api {
  private instance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': locale.languageTag
    }
  })

  public user: User

  public entry: Entry

  constructor() {
    this.addParserErrorInterceptor()

    this.user = new User(this.instance)
    this.entry = new Entry(this.instance)
  }

  private addParserErrorInterceptor() {
    this.instance.interceptors.response.use(
      response => response,
      (error: AxiosError) => {
        const json = {
          status: error.response?.status,
          request: {
            params: error.config?.params,
            headers: error.config?.headers,
            body: error.config?.data ? JSON.parse(error.config.data) : null
          },
          response: {
            body: error.response?.data
          }
        }

        console.warn(error.config?.url, '')
        console.error(JSON.stringify(json, null, 2))

        return Promise.reject(error)
      }
    )
  }
}

export const api = new Api()
