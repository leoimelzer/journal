import { create } from 'zustand'

interface SessionStore {
  user: boolean
  initialize: () => Promise<void>
  loading: boolean
}

export const useSessionStore = create<SessionStore>((set, get) => ({
  user: true,
  loading: true,
  initialize: async () => {
    try {
      console.log('[useSessionStore] Initializing...')
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      console.log(error)
    } finally {
      set({ loading: false })
    }
  }
}))
