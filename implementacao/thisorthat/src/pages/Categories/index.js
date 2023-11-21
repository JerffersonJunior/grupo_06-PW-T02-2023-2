import styles from "./Categories.module.css"
import Navbar from "../../components/Navbar"
import { useState } from "react"

const Categories = ({categoria, setCategoria})=>{
    return(
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.container_opcao}>
                    <button className={styles.button} onClick={(e)=>setCategoria("Gatos")}>Gatos</button>
                </div>
                <button className={styles.button_confirm}>Começar</button>
                <strong className={styles.estilo}>Categoria selecionado: {categoria}</strong>
            </div>
        </div>
    )
}

export default Categories