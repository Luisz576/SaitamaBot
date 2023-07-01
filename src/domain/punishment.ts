import { PunishmentType } from "./punishment_type";

interface PunishmentProps{
    type: PunishmentType
    username: string
    duration_in_seconds: number
    reason: string
    comment: string
}

export default class Punishment implements PunishmentProps{
    type: PunishmentType
    username: string
    duration_in_seconds: number
    reason: string
    comment: string
    constructor(props: PunishmentProps){
        this.type = props.type
        this.username = props.username
        this.duration_in_seconds = props.duration_in_seconds
        this.reason = props.reason
        this.comment = props.comment
    }
}