import styles from './Publish.module.css'

import Navbar from '../../components/Navbar'
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';

function Publish(){
  const [ username, setUsername] = useState("")
  const [ msg, setMsg ] = useState("")
  const { currentUser } = useAuth()
  const usuarioRef = doc(db, 'usuarios', currentUser.uid)
  const history = useNavigate()

  function handleClick(){
    try {
      addDoc(collection(db, "forum"), {
        foto: currentUser.photoURL,
        msg: msg,
        usuario: username 
      })
      history('/forum')
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  } 

  useEffect(()=>{
    const fetch = (async ()=>{
        const docSnap = await getDoc(usuarioRef)
        setUsername(docSnap.data().username)
    })
    fetch()
},[currentUser])

  return(
    <div>
        <Navbar />
        <div className>
            <form>
              <label className={styles.labelcoment} for="Comentario">Publicação do Fórum</label>
              <input className={styles.inputcoment} type="text" id="Comentario" name="Comentario" placeholder="Comentar" onChange={(e)=>{setMsg(e.target.value)}}/>
              <button className={styles.nextbutton} onClick={(handleClick)}>Enviar</button>
          </form>
        </div>
    </div>
  )
}

export default Publish;