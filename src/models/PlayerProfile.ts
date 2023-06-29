interface IPlayerProfile {
    username: String
    skin: String
    discord: String
    networkxp: Number
    role: Number
}

export class PlayerProfile implements IPlayerProfile {
    username: String
    skin: String
    discord: String
    networkxp: Number
    role: Number

    constructor({username, skin, discord, role, networkxp}: IPlayerProfile){
        this.username = username
        this.skin = skin
        this.discord = discord
        this.networkxp = networkxp
        this.role = role
    }
}