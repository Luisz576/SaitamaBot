import { player_profile_not_linked_with_discord, unlink_command_answer } from '../../messages/messages.json'
import { ActionRowBuilder, ApplicationCommandType, ButtonBuilder, ButtonStyle, Collection } from "discord.js";
import { Command } from "../../types/command";
import { getLanguage } from '../../domain/languages';
import api from '../../services/api';

export default new Command({
    name: "unlink",
    description: "unlink your discord account",
    type: ApplicationCommandType.ChatInput,
    logged_command: true,
    run({player_profile, interaction}) {
        if(!player_profile){return}
        interaction.reply({
            ephemeral: true,
            content: unlink_command_answer.message_asking_to_confirm[getLanguage(player_profile.language)],
            components: [
                new ActionRowBuilder<ButtonBuilder>({
                    components: [
                        new ButtonBuilder({
                            customId: "unlink-confirm-button-action",
                            label: unlink_command_answer.button_confirm[getLanguage(player_profile.language)],
                            style: ButtonStyle.Success
                        })
                    ]
                })
            ]
        })
    },
    buttons: new Collection([
        ["unlink-confirm-button-action", async (interaction) => {
            const response = await api.unlinkDiscord({
                discord_name: interaction.user.username,
            })

            if(response.isLeft()){
                return interaction.update({
                    content: unlink_command_answer.message_error_to_unlink,
                    components: []
                })
            }
            interaction.update({
                content: unlink_command_answer.message_unlink_success,
                components: []
            })
        }]
    ])
})