import { z } from 'zod'

export const UUIDSchema = z.string().uuid()

export type UUID = z.infer<typeof UUIDSchema>
