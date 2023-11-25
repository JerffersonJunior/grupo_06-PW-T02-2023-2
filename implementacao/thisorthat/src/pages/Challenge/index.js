import styles from "./Challenge.module.css"
import Navbar from "../../components/Navbar"
import { useCategory } from "../../contexts/CategoryContext"

import { useNavigate } from "react-router-dom"


function Challenge(){
    const { categoriaSelecionada, setCategoriaSelecionada } = useCategory()
    const history = useNavigate()

    function confirmar(){
        if(!categoriaSelecionada){
            return alert("Escolha uma categoria")
        }
        else{
            history('/jogo')
        }
    }

    return(
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.container_opcao}>
                    <button className={styles.button} onClick={(e)=>setCategoriaSelecionada("Nome - Categoria")}>Gatos</button>
                </div>
                <button className={styles.button_confirm} onClick={confirmar} >Começar</button>
                <strong className={styles.estilo}>Categoria selecionado: {categoriaSelecionada}</strong>
            </div>
        </div>
    )
}

export default Challenge