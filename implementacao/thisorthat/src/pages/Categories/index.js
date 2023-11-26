import styles from "./Categories.module.css"
import Navbar from "../../components/Navbar"
import { useCategory } from "../../contexts/CategoryContext"

import { useNavigate } from "react-router-dom"

function Categories(){
    const { categoriaSelecionada, setCategoriaSelecionada } = useCategory()
    const history = useNavigate()

    function confirmar(){
        if(!categoriaSelecionada){
            return alert("Escolha uma categoria")
        }
        else{
            history('/game')
        }
    }

    return(
        <div>
            <Navbar />
            <div className={styles.container}>
                <img className={styles.tooltip} src="https://img.elo7.com.br/feedback/attachments/15DCFB4/240x240/adesivo-quadrado-mario-bross-decoracao-lembrancinhas-personalizadas-lembrancinhas-1.jpg" alt='Tooltip'/> 
                <div className={styles.container_opcao}>
                    <button className={styles.button} onClick={(e)=>setCategoriaSelecionada("Gatos")}>Gatos</button>
                    <button className={styles.button} onClick={(e)=>setCategoriaSelecionada("Cachorros")}>Cachorros</button>
                </div>
                <button className={styles.button_confirm} onClick={confirmar} >Começar</button>
                <strong className={styles.estilo}>Categoria selecionado: {categoriaSelecionada}</strong>
            </div>
        </div>
    )
}

export default Categories