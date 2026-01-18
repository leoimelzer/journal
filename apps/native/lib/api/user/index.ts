import { UUID } from '@/types'
import { AxiosInstance } from 'axios'

export class User {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  public async create(data: { name: string, email: string, password: string }) {
    const response = await this.instance.post<any>(
      '/v1/user',
      { data }
    )

    return response
  }

  public async update(id: UUID, data: { name: string, email: string, password: string }) {
    const response = await this.instance.put<any>(
      '/v1/user/' + id,
      { data }
    )

    return response
  }

  public async delete(id: UUID) {
    const response = await this.instance.delete<any>(
      '/v1/user/' + id
    )

    return response
  }
}
