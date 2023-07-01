import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import { player_profile_not_linked_with_discord } from '../../messages/messages.json'
import { Command } from "../../types/command";
import games from "../../domain/games";
import api from "../../services/api";

export default new Command({
    name: "gstatistics",
    description: "show your game statistics",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "game",
            description: "choice a game",
            choices: games,
            required: true,
            type: ApplicationCommandOptionType.String,
        }
    ],
    logged_command: true,
    async run({interaction, player_profile, options}){
        //TODO
        interaction.reply({
            content: `[${options.getString('game')}]Comando não implementado :(`,
            ephemeral: true
        })
    }
})