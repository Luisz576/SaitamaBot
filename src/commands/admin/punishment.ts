import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import { Command } from "../../types/command";
import punishment_types, { getPunishmentTypeByName } from "../../domain/punishment_type";
import api from "../../services/api";
import {error_loading_data, invalid_parameter_was_passed, punishment_command_success} from '../../messages/messages.json'
import Punishment from "../../domain/punishment";
import { getLanguage } from "../../domain/languages";

export default new Command({
    name: "punishment",
    adm_command: true,
    description: "give punishment",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "type",
            description: "Choice the type",
            choices: punishment_types,
            required: true,
            type: ApplicationCommandOptionType.String,
        },
        {
            name: "username",
            description: "Username to give punishment",
            required: true,
            type: ApplicationCommandOptionType.String
        },
        {
            name: "reason",
            description: "reason for punishment",
            required: true,
            type: ApplicationCommandOptionType.String
        },
        {
            name: "duration",
            description: "Duration of punishment for temporary punishments",
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: "comment",
            description: "Comment of punishment",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],
    async run({interaction, options, player_profile}){
        const username = options.getString('username')
        const reason = options.getString('reason')
        const type = options.getString('type')
        const duration_in_seconds = options.getNumber('duration')
        const comment = options.getString('comment')
        
        if(!username || !reason || !type || !duration_in_seconds || !comment){
            return interaction.reply({
                ephemeral: true,
                content: invalid_parameter_was_passed
            })
        }
        const response = await api.givePunishment({
            punishment: new Punishment({
                username,
                reason,
                type: getPunishmentTypeByName(type),
                duration_in_seconds,
                comment
            })
        })

        if(response.isLeft()){
            return interaction.reply({
                ephemeral: true,
                content: error_loading_data
            })
        }
        interaction.reply({
            ephemeral: true,
            content: punishment_command_success[getLanguage(player_profile?.language)]
        })
    }
})