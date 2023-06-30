import saitama from "../../services/saitama";
import { Event } from "../../types/event";

export default new Event({
    name: "interactionCreate",
    run(interaction){
        if(interaction.isModalSubmit()){
            saitama.modals.get(interaction.customId)?.(interaction)
        }
        if(interaction.isButton()){
            saitama.buttons.get(interaction.customId)?.(interaction)
        }
        if(interaction.isStringSelectMenu()){
            saitama.selects.get(interaction.customId)?.(interaction)
        }
    }
})