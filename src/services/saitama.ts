import { Client, Partials, IntentsBitField, BitFieldResolvable, GatewayIntentsString, Collection, ApplicationCommandDataResolvable, ClientEvents } from 'discord.js'
import { CommandType, ComponentsButton, ComponentsModal, ComponentsSelection } from '../types/command'
import fs from 'fs'
import path from 'path'
import { EventType } from '../types/event'

const filterTsAndJs = (filename: string) => filename.endsWith('.ts') || filename.endsWith('.js')

class Saitama extends Client{
    private inited: boolean = false
    isInited(){
        return this.inited
    }

    commands: Collection<string, CommandType> = new Collection()
    buttons: ComponentsButton = new Collection()
    selects: ComponentsSelection = new Collection()
    modals: ComponentsModal = new Collection()

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
                Partials.User,
            ]
        })
    }

    private registerSlashCommands(slash_commands: ApplicationCommandDataResolvable[]){
        this.application?.commands.set(slash_commands)
            .then(() => {
                console.log("✅ Slash commands registered!")
            })
            .catch((err) => {
                console.log("❌ Couln't load slash commands")
                console.error(err)
            })
    }

    private registerEvents(){
        // load events
        const eventsPath = path.join(__dirname, "..", "events")
        // foreach event
        fs.readdirSync(`${eventsPath}/`)
            .filter(filterTsAndJs)
            .forEach(async filename => {
                const { name, once, run }: EventType<keyof ClientEvents> = (await import(`../events/${filename}`))?.default
                if(name){
                    try{
                        if(once){
                            this.once(name, run)
                        }else{
                            this.on(name, run)
                        }
                        console.log(`✅ Event '${name}' from file '${filename}' registered`)
                    }catch(err){
                        console.log(`❌ Couln't load event '${name}'`)
                        console.error(err)
                    }
                }
            })
    }

    private loadModules(){
        // load commands
        const slash_commands: ApplicationCommandDataResolvable[] = []
        const commandsPath = path.join(__dirname, "..", "commands")
        // foreach command folder
        fs.readdirSync(commandsPath).forEach(commandFolder => {
            fs.readdirSync(commandsPath + `/${commandFolder}/`)
                // filter
                .filter(filterTsAndJs)
                // foreach filename
                .forEach(async filename => {
                    const command: CommandType = (await import(`../commands/${commandFolder}/${filename}`))?.default
                    const { name, buttons, selects, modals } = command
                    if(name){
                        // register command on bot
                        this.commands.set(name, command)
                        slash_commands.push(command)

                        // register components
                        if(buttons){
                            buttons.forEach((button, key) => this.buttons.set(key, button))
                        }
                        if(selects){
                            selects.forEach((select, key) => this.selects.set(key, select))
                        }
                        if(modals){
                            modals.forEach((modal, key) => this.modals.set(key, modal))
                        }
                    }
                })
            
            // register events
            this.registerEvents()

            // on ready
            this.on('ready', async () => {
                // register commands
                this.registerSlashCommands(slash_commands)
            })
        })
    }

    init(){
        if(this.inited){ return }
        this.loadModules()
        this.login(process.env.BOT_TOKEN)
        this.inited = true
    }
}

export type ISaitama = Saitama

const saitama = new Saitama()
export default saitama