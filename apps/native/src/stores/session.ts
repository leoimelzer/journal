import { create } from 'zustand'

interface SessionStore {
  loading: boolean
  user: boolean
  initialize: () => Promise<void>
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

export const useSessionStore = create<SessionStore>((set, get) => ({
  loading: true,
  user: false,
  initialize: async () => {
    try {
      console.log('[useSessionStore] Initializing...')
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      console.log(error)
    } finally {
      set({ loading: false })
    }
  },
  signIn: async () => {
    console.log('[useSessionStore] Signing in...')
    await new Promise(resolve => setTimeout(resolve, 1000))
    set({ user: true })
  },
  signOut: async () => {
    console.log('[useSessionStore] Signing out...')
    await new Promise(resolve => setTimeout(resolve, 1000))
    set({ user: false })
  }
}))
