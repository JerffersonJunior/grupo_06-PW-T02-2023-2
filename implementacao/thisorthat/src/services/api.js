import axios from "axios"

const Gatos = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images/search"
})

export default Gatos