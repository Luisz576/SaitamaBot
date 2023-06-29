import * as configs from '../configs/configs.json'
import { Either, left, right } from "../types/either"

class Api{
    async generateAcessToken(): Promise<Either<String, null>> {
        // TODO
        if(false){
            return left("Can't generate token")
        }
        return right(null)
    }
}

export default new Api()