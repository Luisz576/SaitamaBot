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
    async getPlayerProfile({discord_id}: {discord_id: string}): Promise<Either<string, PlayerProfile>>{
        // TODO
        if(true){
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
    async linkDiscord({player_profile_username, discord_name, discord_id}: {player_profile_username: string, discord_name: string, discord_id: string}): Promise<Either<string, PlayerProfile>>{
        if(true){
            return left("Can't link discord")
        }
        return right(new PlayerProfile({
            username: player_profile_username,
            skin: discord_id,
            role: 99,
            discord: discord_name,
            networkxp: 999999,
            language: 1
        }))
    }
}

const api = new Api()
export default api