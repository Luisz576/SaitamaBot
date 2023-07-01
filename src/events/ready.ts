import { Event } from "../types/event";

export default new Event({
    name: "ready",
    run(){
        console.log("☄️ [Saitama] Estou online 😆")
    }
})