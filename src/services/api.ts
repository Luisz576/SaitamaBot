import { PlayerProfile } from "../models/PlayerProfile"
import { Either, left, right } from "../types/either"

// TODO implements
export interface IApi{
    getPlayerProfile({uuid}: {uuid: String}): Promise<void>
}

class Api implements IApi{
    async getPlayerProfile({uuid}: {uuid: String}): Promise<void>{
        
    }
}

export const api = new Api()