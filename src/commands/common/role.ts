import { getLanguage } from '../../domain/languages';
import { getRole } from '../../domain/roles';
import { player_profile_not_linked_with_discord, role_command_answer } from '../../messages/messages.json'
import { Command } from "../../types/command";

export default new Command({
    name: "role",
    description: "say your role",
    run(props) {
        if(!props.player_profile){
            props.interaction.reply({
                ephemeral: true,
                content: player_profile_not_linked_with_discord
            })
            return
        }
        props.interaction.reply({
            ephemeral: true,
            content: role_command_answer
                [getRole(props.player_profile.role)]
                [getLanguage(props.player_profile.language)]
        })
    },
})