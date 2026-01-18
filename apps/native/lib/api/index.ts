import axios from 'axios'
import { locale } from '@/i18n'
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

  constructor() {
    this.user = new User(this.instance)
  }
}

export const api = new Api()
