import { create } from 'zustand'

interface IsMobile {
  isMobile: boolean
  setIsMobile: (isMobile: boolean) => void
}

export const useIsMobileStore = create<IsMobile>(set => ({
  isMobile: false,
  setIsMobile: (isMobile: boolean) =>
    set(() => {
      return { isMobile }
    }),
}))
