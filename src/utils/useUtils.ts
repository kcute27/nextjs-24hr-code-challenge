import { UserProfile } from '@auth0/nextjs-auth0'
import { GITHUB_URL } from '../constants/urls'

const useUtils = () => {

    const parseUserProfile = (user: UserProfile | null) => {
        return GITHUB_URL + user?.nickname
    }

    const getPrimaryNav = (url: string) => {
        return url.split("/")
    }

    return { parseUserProfile }
}

export default useUtils