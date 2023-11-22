import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import Avatar from "../../images/avatar.png"
import { upload } from "../../services/firebaseConfig"
import { useEffect, useState } from "react"

import Navbar from "../../components/Navbar"
import styles from "./Profile.module.css"

function Profile (){
    const [photoURL, setPhotoURL] = useState(Avatar)
    const { currentUser, logout } = useAuth()
    const [photo, setPhoto] = useState(null)
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handleLogOut(){
        try{
            const success = await logout()
            if (success){
                history('/')
            }
        } catch{
            alert("Deu erro")
        }
    }

    function handleChange(e){
        if(e.target.files[0]){
            setPhoto(e.target.files[0])
        }
    }

    function handleClick(){
        upload(photo, currentUser, setLoading)
    }
    
    useEffect(()=>{
        if(currentUser && currentUser.photoURL){
            setPhotoURL(currentUser.photoURL)
        }
    },[currentUser])

    return(
        <div>
            <Navbar />
            <div className={styles.container}>
                <string><h3>Usuário</h3></string>{currentUser.email}
                <img  src={photoURL} alt="Avatar" className={styles.avatar} />
                <div className={styles.inputContainer}>
                    <p>Trocar foto de perfil</p>
                    <input className={styles.input_form} type="file" onChange={handleChange}/>
                    <button className={styles.button} disabled={loading || !photo} onClick={handleClick}>Upload</button>
                    <button className={styles.button_logout} onClick={handleLogOut}>LogOut</button>
                </div>
            </div>
        </div>
    )
}

export default Profile