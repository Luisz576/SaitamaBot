import { ApplicationCommand, ButtonInteraction, Collection, CommandInteraction, CommandInteractionOptionResolver, ModalSubmitInteraction, StringSelectMenuInteraction } from 'discord.js'
import {ISaitama} from '../services/saitama'

interface CommandProps{
    client: ISaitama,
    interaction: CommandInteraction,
    options: CommandInteractionOptionResolver
}

export type ComponentsButton = Collection<string, (iteraction: ButtonInteraction) => any>
export type ComponentsSelection = Collection<string, (iteraction: StringSelectMenuInteraction) => any>
export type ComponentsModal = Collection<string, (iteraction: ModalSubmitInteraction) => any>

interface CommandComponents{
    buttons?: ComponentsButton
    selects?: ComponentsSelection
    modal?: ComponentsModal
}

export type CommandType = ApplicationCommand & CommandComponents & {
    run(props: CommandProps): any
}

export class Command{
    constructor(options: CommandType){
        Object.assign(this, options)
    }
}