import { UserProfile } from '@auth0/nextjs-auth0'
import { GITHUB_URL } from '../constants/urls'

const useUtils = () => {

    const parseUserProfile = (user: UserProfile | null) => GITHUB_URL + user?.nickname


    const getPageTitle = (url: string) => url.split("/")[1].replace("/", "")


    const convertCtoF = (celsius: number) => {
        var cTemp = celsius;
        var cToFahr = cTemp * 9 / 5 + 32;
        return cToFahr
    }

    return { parseUserProfile, convertCtoF, getPageTitle }
}

export default useUtils