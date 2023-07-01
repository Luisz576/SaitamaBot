export enum PunishmentType{
    mute = "Mute",
    temporary_ban = "Temporary Ban",
    ban = "Ban"
}

export function getId(type: PunishmentType): number{
    switch(type){
        case PunishmentType.mute:
            return 1
        case PunishmentType.temporary_ban:
            return 2
        case PunishmentType.ban:
            return 3
    }
}

export function getPunishmentTypeByName(type: string, default_return = PunishmentType.mute): PunishmentType{
    switch(type){
        case "mute":
            return PunishmentType.mute
        case "temporary_ban":
            return PunishmentType.temporary_ban
        case "ban":
            return PunishmentType.ban
    }
    return default_return
}

const punishment_types: {name: string, value: string}[] = []
for(let p in PunishmentType){
    punishment_types.push({
        name: PunishmentType[p as keyof typeof PunishmentType],
        value: p
    })
}

export default punishment_types