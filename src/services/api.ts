import * as configs from '../../configs/configs.json'
import {client_secret} from '../../configs/auth/api_secret.json'
import { Either, left, right } from "../types/either"

class Api{
    async generateAcessToken(): Promise<Either<String, null>> {
        // TODO
        if(true){
            return left("Can't generate token")
        }
        return right(null)
    }
}

export default new Api()