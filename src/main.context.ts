import { createContext } from 'react'
// import { TFunction } from 'react-i18next'

export interface MainContextProps {
  lang: string
  tourRef: React.MutableRefObject<undefined>
  setLang: (lang: string) => void
  // translate: TFunction<'translation', undefined>
  openPopup: (
    type: string,
    title: string,
    properties: Record<string, unknown>,
    component: React.FC<any>
  ) => void
  closePopup: () => void
}

export const MainContext = createContext<MainContextProps | null>(null)
