import styles from './Logo.module.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

function Logo (){
    return(
        <div className={styles.container}>
            <Link to='/'><img className={styles.logo} src={logo} alt="Logo"/></Link>
        </div>
    )
}

export default Logo