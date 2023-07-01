import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import { Command } from "../../types/command";
import api from "../../services/api";
import {invalid_parameter_was_passed, error_loading_data, pardonall_command_success} from '../../messages/messages.json'
import { getLanguage } from "../../domain/languages";

export default new Command({
    name: "pardonall",
    description: "Pardon all punishment of a player",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "username",
            description: "Username of player",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    adm_command: true,
    async run({interaction, player_profile, options}){
        if(!player_profile){ return }

        const username = options.getString('username')

        if(!username){
            return interaction.reply({
                ephemeral: true,
                content: invalid_parameter_was_passed
            })
        }

        const response = await api.pardonAll({
            username
        })

        if(response.isLeft()){
            return interaction.reply({
                ephemeral: true,
                content: error_loading_data
            })
        }
        interaction.reply({
            ephemeral: true,
            content: pardonall_command_success[getLanguage(player_profile.language)]
        })
    }
})