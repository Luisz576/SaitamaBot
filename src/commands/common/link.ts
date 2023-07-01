import { Command } from "../../types/command";
import { invalid_parameter_was_passed, link_command_fail_answer, link_command_answer, player_profile_is_already_linked_with_discord } from '../../messages/messages.json'
import { getLanguage } from "../../domain/languages";
import api from "../../services/api";
import { PlayerProfile } from "../../models/player_profile";
import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";

export default new Command({
    name: "link",
    type: ApplicationCommandType.ChatInput,
    description: "link you discord with your minecraft profile",
    options: [
        {
            name: "username",
            description: "your minecraft username",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    async run({player_profile, interaction, options}){
        if(player_profile){
            return interaction.reply({
                ephemeral: true,
                content: player_profile_is_already_linked_with_discord[getLanguage(player_profile.language)]
            })
        }

        const player_profile_username = options.getString('username')
        if(player_profile_username == null){
            return interaction.reply({
                ephemeral: true,
                content: invalid_parameter_was_passed
            })
        }
        
        const response = await api.linkDiscord({
            discord_name: interaction.user.username,
            discord_id: interaction.user.id,
            player_profile_username
        })
        if(response.isLeft()){
            console.error(response.value)
            return interaction.reply({
                ephemeral: true,
                content: link_command_fail_answer
            })
        }
        interaction.reply({
            ephemeral: true,
            content: link_command_answer[getLanguage((response.value as PlayerProfile).language)]
        })
    },
})