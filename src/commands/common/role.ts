import { ApplicationCommandType } from 'discord.js';
import { getLanguage } from '../../domain/languages';
import { getRole } from '../../domain/roles';
import { player_profile_not_linked_with_discord, role_command_answer } from '../../messages/messages.json'
import { Command } from "../../types/command";

export default new Command({
    name: "role",
    description: "say your role",
    type: ApplicationCommandType.ChatInput,
    logged_command: true,
    run({player_profile, interaction}) {
        if(!player_profile){return}
        interaction.reply({
            ephemeral: true,
            content: role_command_answer
                [getRole(player_profile.role)]
                [getLanguage(player_profile.language)]
        })
    },
})