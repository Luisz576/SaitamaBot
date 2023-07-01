import { ApplicationCommandData, ButtonInteraction, Collection, CommandInteraction, CommandInteractionOptionResolver, ModalSubmitInteraction, StringSelectMenuInteraction } from 'discord.js'
import {ISaitama} from '../services/saitama'
import { PlayerProfile } from '../models/player_profile'

interface CommandProps{
    client: ISaitama,
    interaction: CommandInteraction,
    options: CommandInteractionOptionResolver,
    player_profile: PlayerProfile | undefined
}

export type ComponentsButton = Collection<string, (iteraction: ButtonInteraction) => any>
export type ComponentsSelection = Collection<string, (iteraction: StringSelectMenuInteraction) => any>
export type ComponentsModal = Collection<string, (iteraction: ModalSubmitInteraction) => any>

interface CommandComponents{
    buttons?: ComponentsButton
    selects?: ComponentsSelection
    modals?: ComponentsModal
}

export type CommandType = ApplicationCommandData & CommandComponents & {
    readonly logged_command?: boolean
    readonly adm_command?: boolean
    run(props: CommandProps): any
}

export class Command{
    constructor(options: CommandType){
        Object.assign(this, options)
    }
}