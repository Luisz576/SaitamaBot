import * as configs from '../configs/configs.json'
import { PlayerProfile } from '../models/player_profile'
import { Either, left, right } from "../types/either"

class Api{
    async generateAcessToken(): Promise<Either<String, null>> {
        // TODO
        if(false){
            return left("Can't generate token")
        }
        return right(null)
    }
    async getPlayerProfile({discord}: {discord: string}): Promise<Either<string, PlayerProfile>>{
        // TODO
        if(false){
            return left("Can't generate token")
        }
        return right(new PlayerProfile({
            username: "Luisz576",
            skin: "Luisz576",
            role: 99,
            discord: "Luisz576",
            networkxp: 999999,
            language: 1
        }));
    }
}

export default new Api()