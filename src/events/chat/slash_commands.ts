import { CommandInteractionOptionResolver } from "discord.js";
import saitama from "../../services/saitama";
import { Event } from "../../types/event";
import api from "../../services/api";
import { PlayerProfile } from "../../models/player_profile";

export default new Event({
    name: "interactionCreate",
    async run(interaction){
        if(!interaction.isCommand()){ return }

        // get command
        const command = saitama.commands.get(interaction.commandName)
        if(!command){ return }

        // get player profile if linked
        const response = await api.getPlayerProfile({discord: '<TODO>'})
        let player_profile
        if(response.isRight()){
            player_profile = response.value as PlayerProfile
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