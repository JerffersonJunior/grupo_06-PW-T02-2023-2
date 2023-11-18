import { useState } from 'react'
import { auth } from '../../services/firebaseConfig'
import { confirmPasswordReset } from 'firebase/auth'

import styles from './ResetPassword.module.css'
import Logo from '../../components/Logo'
import Titulo from '../../components/Titulo'
import { useLocation } from 'react-router-dom'

function ResetPassword(){
    function useQuery(){
        const location = useLocation()
        return new URLSearchParams(location.search)
    }

    function confirmPassword(oobCode, newPassword){
        return confirmPasswordReset(auth, oobCode, newPassword)
    }

    const query = useQuery()
    const [newPassword, setNewPassword] = useState("")

    return(
        <div>
            <Logo />
            <Titulo />
            <div className={styles.sub}>
                    <h2>Redefinir senha</h2>
            </div>
            <div className={styles.container}>
                <form onSubmit={async e=>{
                    e.preventDefault()
                    confirmPassword(query.get('oobCode'), newPassword).then(()=>{
                        alert("Alterado com sucesso")
                    })
                }}>
                    <div className={styles.inputContainer}>
                    <label htmlFor="senha">Nova senha</label>
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder="************"
                        value={newPassword}
                        onChange={e=> setNewPassword(e.target.value)}
                    />
                    </div>

                    <button className={styles.button}>
                    Redefinir senha
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword