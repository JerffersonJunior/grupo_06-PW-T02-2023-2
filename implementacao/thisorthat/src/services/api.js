import axios from "axios"

const Gatos = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images/search"
})

const Cachorros = axios.create({
    baseURL: "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
})

export {Gatos, Cachorros}