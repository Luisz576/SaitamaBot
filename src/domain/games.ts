export enum Games{
    the_bridge = "The Bridge",
    block_party = "Block Party"
}

// create games array
const games: {name: string, value: string}[] = []
for(let i in Games){
    games.push({
        name: Games[i as keyof typeof Games],
        value: i,
    })
}

export default games