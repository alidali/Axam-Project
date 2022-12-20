import { createContext } from 'react'
import { IUser, IRole, IProfile } from '@gari/shared/domain'

export interface AuthContextProps {
  authState: {
    isLoggedIn: boolean
    user: IUser
    myprofile: IProfile
    roles: IRole['label'][]
  }
  dispatch: React.DispatchWithoutAction
}

export const AuthenticationContext = createContext<AuthContextProps | null>(null)
