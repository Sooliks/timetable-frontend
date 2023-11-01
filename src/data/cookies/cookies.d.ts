import Cookies, {CookieSetOptions} from "universal-cookie";
const config: CookieSetOptions = {
    maxAge: (3600*(24*30)),
    path: '/'
}
export const cookies = new Cookies(null, config);