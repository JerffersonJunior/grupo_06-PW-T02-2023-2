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
            <div className={styles.container_title}>
                <p className={styles.quest}>Categorias</p>
                <div className={styles.help}>
                    ?
                    <div className={styles.helptext}>Categorias utilizadas para a exibição de opções</div>
                </div>
            </div>
            <div className={styles.container}>
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