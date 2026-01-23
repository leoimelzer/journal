import { create } from 'zustand'

interface SessionStore {
  initialize: () => Promise<void>
  loading: boolean
}

export const useSessionStore = create<SessionStore>((set, get) => ({
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
