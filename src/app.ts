import dotenv from 'dotenv'
import saitama from './services/saitama'
import api from './services/api'

dotenv.config()

api.generateAcessToken().then((res) => {
    // error
    if(res.isLeft()){
        console.error(`[Saitama] Can't connect to api:\n${res.value}`)
        return
    }

    // register events
    saitama.on('ready', () => {
        console.log("[Saitama] Estou online!")
    })
    
    saitama.on('messageCreate', (message) => {
        if(message.author.id == saitama.user?.id){ return }

        
    })

    // init bot
    saitama.init()
})