import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig'

import styles from './ForgotPassword.module.css'
import Logo from '../../components/Logo'
import Titulo from '../../components/Titulo'

function ForgotPassword(){

    const resetPassword = async(e)=>{
        e.preventDefault()
        const emailVal = e.target.email.value
        sendPasswordResetEmail(auth, emailVal).then(()=>{
            alert("Email enviado com sucesso")
        }).catch((erro)=>{
            alert("Falha ao enviar email" + erro)
        })
    }

    return(
        <div>
            <Logo />
            <Titulo />
            <div className={styles.sub}>
                    <h2>Esqueceu a senha?</h2>
            </div>
            <div className={styles.container}>
                <form onSubmit={(e)=>resetPassword(e)}>
                    <div className={styles.inputContainer}>
                    <label htmlFor="email">Seu e-mail de acesso</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="rabanete123@gmail.com"
                    />
                    </div>

                    <div className={styles.sub_msg}>
                        Você irá receber um e-mail no endereço informado acima contendo o procedimento para redefinir a senha para esse usuário
                    </div>

                    <button className={styles.button}>
                    Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword