import { Link, Navigate } from "react-router-dom";
import { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig'

import styles from './Register.module.css'

import Logo from '../../components/Logo'
import Titulo from '../../components/Titulo'

function Register(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth)

    function handleSignOut(e){
        e.preventDefault()
        createUserWithEmailAndPassword(email,password)
    }

    if(loading){
        return <p>carregando...</p>
    }

    if(user){
        return <Navigate to='/'/>
    }

    return(
        <div>
            <Logo />
            <Titulo />
            <div className={styles.sub}>
                <h2>Criar nova conta</h2>
            </div>
            <div className={styles.container}>
                <form>
                    <div className={styles.inputContainer}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="rabanete123@gmail.com"
                        onChange={e => setEmail(e.target.value)}
                    />
                    </div>

                    <div className={styles.inputContainer}>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="********************"
                        onChange={e => setPassword(e.target.value)}
                    />
                    </div>

                    <button className={styles.button} onClick={handleSignOut}>
                    Criar conta
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register