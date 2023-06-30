import { ApplicationCommandType } from "discord.js";
import { Command } from "../../types/command";

export default new Command({
    name: "ping",
    type: ApplicationCommandType.ChatInput,
    description: "reply with pong",
    run({interaction}){
        interaction.reply({
            ephemeral: true,
            content: "pong"
        })
    }
})