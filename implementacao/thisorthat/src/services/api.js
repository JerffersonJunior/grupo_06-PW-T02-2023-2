import axios from "axios"

const Gatos = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images/search"
})

const Cachorros = axios.create({
    baseURL: "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
})

const Raposas = axios.create({
    baseURL: "https://randomfox.ca/floof/"
})

const Quokkas = axios.create({
    baseURL: "https://quokka.pics/api/"
})

export {Gatos, Cachorros, Raposas, Quokkas}