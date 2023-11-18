import styles from './Logo.module.css'
import logo from '../../images/logo.png'

function Logo (){
    return(
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt="Logo"/>
        </div>
    )
}

export default Logo