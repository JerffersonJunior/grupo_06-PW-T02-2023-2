import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import styles from './Register.module.css'
import { useNavigate } from 'react-router-dom'

import Logo from '../../components/Logo'
import Titulo from '../../components/Titulo'


function Register(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !==
        passwordConfirmRef.current.value){
            return alert('Senhas não correspondem')
        }

        try{
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history('/')
        } catch{
            alert('Falha ao criar a conta')
        }

        setLoading(false)
    }

    return(
        <div>
            <Logo />
            <Titulo />
            <div className={styles.sub}>
                <h2>Criar nova conta</h2>
            </div>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="rabanete123@gmail.com"
                        ref={emailRef}
                        required
                    />
                    </div>

                    <div className={styles.inputContainer}>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="********************"
                        ref={passwordRef}
                    />
                    </div>

                    <div className={styles.inputContainer}>
                    <label htmlFor="passwordConfirm">Confirme a senha</label>
                    <input
                        type="password"
                        name="passwordConfirm"
                        id="passwordConfirm"
                        placeholder="********************"
                        ref={passwordConfirmRef}
                    />
                    </div>

                    <button disabled={loading} className={styles.button}>
                    Criar conta
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register