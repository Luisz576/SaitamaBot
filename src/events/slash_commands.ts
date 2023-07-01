import { CommandInteractionOptionResolver } from "discord.js";
import { command_only_logged, player_isnt_adm } from '../messages/messages.json'
import saitama from "../services/saitama";
import { Event } from "../types/event";
import api from "../services/api";
import { PlayerProfile } from "../models/player_profile";
import { getLanguage } from "../domain/languages";
import { isAdm } from "../domain/roles";

export default new Event({
    name: "interactionCreate",
    async run(interaction){
        if(!interaction.isCommand()){ return }
        
        // get command
        const command = saitama.commands.get(interaction.commandName)
        if(!command){ return }

        // get player profile if linked
        const response = await api.getPlayerProfile({discord_id: interaction.user.id})
        let player_profile
        if(response.isRight()){
            player_profile = response.value as PlayerProfile
        }

        // logged
        if(command.logged_command){
            if(!player_profile){
                return interaction.reply({
                    ephemeral: true,
                    content: command_only_logged
                })
            }
        }

        // adm
        if(command.adm_command){
            if(!player_profile){
                return interaction.reply({
                    ephemeral: true,
                    content: command_only_logged
                })
            }
            if(!isAdm(player_profile.role)){
                return interaction.reply({
                    ephemeral: true,
                    content: player_isnt_adm[getLanguage(player_profile.language)]
                })
            }
        }
        // execute command
        const options = interaction.options as CommandInteractionOptionResolver
        command.run({
            client: saitama,
            interaction,
            player_profile,
            options
        })
    }
})