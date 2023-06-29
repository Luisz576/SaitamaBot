import {bot_token} from '../../configs/auth/bot_token.json'
import { Client, Partials, IntentsBitField, BitFieldResolvable, GatewayIntentsString } from 'discord.js'

class Saitama extends Client{
    constructor(){
        super({
            intents: Object.keys(IntentsBitField.Flags) as BitFieldResolvable<GatewayIntentsString, number>,
            partials: [
                Partials.Channel,
                Partials.GuildMember,
                Partials.GuildScheduledEvent,
                Partials.Message,
                Partials.Reaction,
                Partials.ThreadMember,
                Partials.User
            ]
        })
    }
    public init(){
        this.login(bot_token)
    }
}

export default new Saitama()