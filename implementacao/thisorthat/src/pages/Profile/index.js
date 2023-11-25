import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import Avatar from "../../images/avatar.png"
import { upload } from "../../services/firebaseConfig"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig"

import Navbar from "../../components/Navbar"
import styles from "./Profile.module.css"

function Profile (){
    const [photoURL, setPhotoURL] = useState(Avatar)
    const { currentUser, logout } = useAuth()
    const [photo, setPhoto] = useState(null)
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('')
    const usuarioRef = doc(db, 'usuarios', currentUser.uid)
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
        const fetch = (async ()=>{
            const docSnap = await getDoc(usuarioRef)
            setUsername(docSnap.data().username)
        })
        if(currentUser && currentUser.photoURL){
            setPhotoURL(currentUser.photoURL)
        }

        fetch()
    },[currentUser, usuarioRef])

    return(
        <div>
            <Navbar />
            <div className={styles.container}>
                <strong><h3>{username}</h3></strong>{currentUser.email}
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