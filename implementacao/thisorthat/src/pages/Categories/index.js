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
                <div className={styles.container_opcao}>
                    <button className={styles.button} onClick={(e)=>setCategoriaSelecionada("Gatos")}>Gatos</button>
                    <button className={styles.button} onClick={(e)=>setCategoriaSelecionada("Cachorros")}>Cachorros</button>
                    <button className={styles.button} onClick={(e)=>setCategoriaSelecionada("Patos")}>Patos</button>
                    <button className={styles.button} onClick={(e)=>setCategoriaSelecionada("Raposas")}>Raposas</button>
                    <button className={styles.button} onClick={(e)=>setCategoriaSelecionada("Quokkas")}>Quokkas</button>
                    <button className={styles.button} onClick={(e)=>setCategoriaSelecionada("Cafe")}>Cafe</button>
                </div>
                <button className={styles.button_confirm} onClick={confirmar} >Começar</button>
                <strong className={styles.estilo}>Categoria selecionado: {categoriaSelecionada}</strong>
            </div>
        </div>
    )
}

export default Categories