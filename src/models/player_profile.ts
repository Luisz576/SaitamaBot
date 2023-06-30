interface IPlayerProfile {
    username: string
    skin: string
    discord: string
    networkxp: number
    role: number,
    language: number
}

export class PlayerProfile implements IPlayerProfile {
    username: string
    skin: string
    discord: string
    networkxp: number
    role: number
    language: number

    constructor({username, skin, discord, role, networkxp, language}: IPlayerProfile){
        this.username = username
        this.skin = skin
        this.discord = discord
        this.networkxp = networkxp
        this.role = role
        this.language = language
    }
}