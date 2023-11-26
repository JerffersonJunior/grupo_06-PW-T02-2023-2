import styles from "./Rodape.module.css"


function Rodape(){
    return(
        <footer className={styles.footer}>
            <ul>
                <li className={styles.lista}>©2023 UFMS - FACOM</li>
            </ul>
        </footer>
        
    )
}

export default Rodape