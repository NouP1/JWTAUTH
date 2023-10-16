import $api from "../http"
import {AxiosResponse} from 'axios'
export default AuthService {
    static async login (username:string, password: sreing): Promise<AxiosResponse<>> {
        return $api.post()
    }
}
response.data.