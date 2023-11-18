import { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig'
import { Navigate } from "react-router-dom";

import styles from './Login.module.css'

import Logo from '../../components/Logo'
import Titulo from '../../components/Titulo'

function Login(){
    const [goToRegister, setGoToRegister] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if(goToRegister){
        return <Navigate to='/register'/>
    }

    function handleSignIn(e){
        e.preventDefault()
        signInWithEmailAndPassword(email,password)
    }

    if(user){
        return <p>Logou</p>
    }

    return(
        <div>
            <Logo />
            <Titulo />
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

                    <button className={styles.button} onClick={handleSignIn}>
                    Login
                    </button>

                    <a href="/forgotpassword">Esqueceu sua senha ?</a>

                    <div className={styles.button_register} onClick={()=>{setGoToRegister(true)}}>
                    Criar nova conta
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login