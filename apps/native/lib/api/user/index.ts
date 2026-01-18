import { AxiosInstance } from 'axios'

export class User {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  public async list() {
    const { data } = await this.instance.get<any>(
      '/v1/user'
    )

    return data
  }
}
