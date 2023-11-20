import React, {  useState } from 'react'
import styles from './Login.module.css'
import { auth } from '../../services/firebaseConfig'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


import Logo from '../../components/Logo'
import Titulo from '../../components/Titulo'


function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [
        signInWithEmailAndPassword,
        user,
    ] = useSignInWithEmailAndPassword(auth);
    const history = useNavigate()

    function handleSignIn(e){
        e.preventDefault()
        try{
            setError('')
            setLoading(true)
            signInWithEmailAndPassword(email, password)
        } catch{
            setError('Falha ao logar na conta')
        }

        setLoading(false)
    }

    if(user){
        history('/profile')
    }

    return(
        <div>
            <Logo />
            <Titulo />
            {error && alert(error)}
            <div className={styles.container}>
                <form className={styles.form_center}>
                    <div className={styles.inputContainer}>
                    <label className={styles.labbel_form} htmlFor="email">E-mail</label>
                    <input
                        className={styles.input_form}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="rabanete123@gmail.com"
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    </div>

                    <div className={styles.inputContainer}>
                    <label className={styles.labbel_form} htmlFor="password">Senha</label>
                    <input
                        className={styles.input_form}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="********************"
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    </div>

                    <button disabled={loading} className={styles.button} onClick={handleSignIn}>
                    Login
                    </button>
                    <a className={styles.link} href="/forgotpassword">Esqueceu sua senha ?</a>

                    <div className={styles.button_register} onClick={()=>{history("/register")}}>
                    Criar nova conta
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login