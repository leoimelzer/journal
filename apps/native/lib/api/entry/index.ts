import { Privacy } from '@/enums'
import { UUID } from '@/types'
import { AxiosInstance } from 'axios'

export class Entry {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  public async list(params: { userId: UUID, privacy?: Privacy }) {
    const response = await this.instance.get<any>(
      '/v1/entry',
      { params }
    )

    return response
  }

  public async get(id: UUID) {
    const response = await this.instance.get<any>(
      '/v1/entry/' + id,
    )

    return response
  }

  public async create(data: { content: string, tags: string[], privacy: Privacy, allowedUsers: UUID[] }) {
    const response = await this.instance.post<any>(
      '/v1/entry',
      { data }
    )

    return response
  }

  public async update(id: UUID, data: { content: string, tags: string[], privacy: Privacy, allowedUsers: UUID[] }) {
    const response = await this.instance.put<any>(
      '/v1/entry/' + id,
      { data }
    )

    return response
  }

  public async delete(id: UUID) {
    const response = await this.instance.delete<any>(
      '/v1/entry/' + id
    )

    return response
  }
}
