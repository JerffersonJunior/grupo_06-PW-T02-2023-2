import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { db } from "../../services/firebaseConfig"
import { collection, getDocs } from "firebase/firestore"

import styles from './Forum.module.css'

import Navbar from '../../components/Navbar'

function Forum(){
    const [users, setUsers] = useState([])
    const forumCollectionRef = collection(db, "forum")
    const history = useNavigate()

    function telaPublicar(){
        history('/forum/publish')
    }

    useEffect(()=>{
        const getUsers = async () => {
            const data = await getDocs(forumCollectionRef)
            setUsers(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
        }

        getUsers()
    })

    return(
        <div>
            <Navbar />
            <div className={styles.container}>
                {users.map((user)=>{
                    return(
                        <div className={styles.msg}>
                            <img className={styles.avatar} src={user.foto} alt="Foto do usuario"/>
                            <div>
                                <h1 className={styles.usuario}>{user.usuario}</h1>
                                <p className={styles.usuario_msg}>{user.msg}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className={styles.button} onClick={telaPublicar}>Publicar</button>
        </div>
    )
}

export default Forum