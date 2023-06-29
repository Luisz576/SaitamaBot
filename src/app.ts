import saitama from './services/saitama'
import api from './services/api'

api.generateAcessToken().then((res) => {
    // error
    if(res.isLeft()){
        console.error(`Can't connect to api:\n${res.value}`)
        return
    }

    // init bot
    saitama.init()
})