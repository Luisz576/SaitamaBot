import { getLanguage } from '../../domain/languages';
import {hello_command_answer} from '../../messages/messages.json'
import { Command } from "../../types/command";

export default new Command({
    name: "hello",
    description: "say Hello World",
    run(props){
        props.interaction.reply({
            ephemeral: true,
            content: hello_command_answer[getLanguage(props.player_profile?.language)]
        })
    }
})