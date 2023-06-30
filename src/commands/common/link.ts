import { Command } from "../../types/command";
import { link_command_fail_answer, link_command_answer, player_profile_is_already_linked_with_discord } from '../../messages/messages.json'
import { getLanguage } from "../../domain/languages";
import api from "../../services/api";

export default new Command({
    name: "link",
    description: "link you discord with your minecraft profile",
    async run(props){
        if(props.player_profile){
            props.interaction.reply({
                ephemeral: true,
                content: player_profile_is_already_linked_with_discord[getLanguage(props.player_profile.language)]
            })
            return
        }
        const discord = "Luisz576"//TODO
        const response = await api.linkDiscord({discord})
        if(response.isLeft()){
            props.interaction.reply({
                ephemeral: true,
                content: link_command_fail_answer
            })
            return
        }
        props.interaction.reply({
            ephemeral: true,
            content: link_command_answer[getLanguage(response.value)]// TODO
        })
    }
})