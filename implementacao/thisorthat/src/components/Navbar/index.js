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
                <nav>
                <img className={styles.foto} src={Logo} alt='Logo'/>
                    <div>
                        <ul className={`${styles.navbar} ${this.state.clicked ? styles.active : styles.navbar}`}>
                            <li><a href='/categories'>Categoria</a></li>
                            <li><a href='/challenge'>Desafios</a></li>
                            <li><a href='/'>Ranking</a></li>
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