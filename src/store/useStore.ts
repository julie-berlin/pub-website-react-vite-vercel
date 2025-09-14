import { create } from 'zustand'

interface AppState {
  theme: 'theme1' | 'theme2'
  isMenuOpen: boolean
  contactFormData: {
    name: string
    email: string
    company: string
    message: string
  }
  setTheme: (theme: 'theme1' | 'theme2') => void
  toggleMenu: () => void
  updateContactForm: (data: Partial<AppState['contactFormData']>) => void
  resetContactForm: () => void
}

const initialContactForm = {
  name: '',
  email: '',
  company: '',
  message: '',
}

export const useStore = create<AppState>((set) => ({
  theme: 'theme1',
  isMenuOpen: false,
  contactFormData: initialContactForm,

  setTheme: (theme) => set({ theme }),

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),

  updateContactForm: (data) =>
    set((state) => ({
      contactFormData: { ...state.contactFormData, ...data },
    })),

  resetContactForm: () => set({ contactFormData: initialContactForm }),
}))