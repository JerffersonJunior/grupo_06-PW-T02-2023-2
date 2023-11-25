import styles from './Navbar.module.css'
import Logo from '../../images/logo.png'
import { Component } from 'react';

class Navbar extends Component{
    state={clicked: false};
    handleClick = ()=>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <div className={styles.container}>
                <img className={styles.foto} src={Logo} alt='Logo'/>
                <nav>
                
                    <div>
                        <ul className={`${styles.navbar} ${this.state.clicked ? styles.active : styles.navbar}`}>
                            <li><a href='/categories'>Categorias</a></li>
                            <li><a href='/challenge'>Desafios</a></li>
                            <li><a href='/ranking'>Ranking</a></li>
                            <li><a href='/forum'>Fórum</a></li>
                            <li><a href='/profile'>Conta</a></li>
                            
                        </ul>
                    </div>
                    <div className={styles.mobile} onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar