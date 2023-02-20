// see: https://docs.pmnd.rs/zustand/guides/updating-state
import { create } from 'zustand'

type State = {
  firstName: string
  lastName: string
}

type Action = {
  updateFirstName: (firstName: State['firstName']) => void
  updateLastName: (lastName: State['lastName']) => void
}

// Create your store, which includes both state and (optionally) actions
export const useStore = create<State & Action>(set => ({
  firstName: '',
  lastName: '',
  updateFirstName: firstName => set(() => ({ firstName })),
  updateLastName: lastName => set(() => ({ lastName })),
}))
