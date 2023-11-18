import styles from './Titulo.module.css'

function Titulo(){
    return(
        <div className={styles.container}>
            <div className={styles.titulo}>
                This or That
            </div>
        </div>
    )
}

export default Titulo