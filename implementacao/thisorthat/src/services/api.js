import axios from "axios"

const Gatos = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images/search"
})

const Cachorros = axios.create({
    baseURL: "https://random.dog/woof.json"
})

const Patos = axios.create({
    baseURL: "https://random-d.uk/api/random"
})
const Raposas = axios.create({
    baseURL: "https://randomfox.ca/floof/"
})

export {Gatos, Cachorros, Patos, Raposas}

