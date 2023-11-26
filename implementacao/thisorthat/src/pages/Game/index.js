import React, { useState, useEffect } from 'react'
import { Gatos, Cachorros, Raposas, Quokkas } from '../../services/api'
import { useCategory } from '../../contexts/CategoryContext';
import { collection, query, where, getDocs, addDoc, updateDoc, getDoc, setDoc, doc } from "firebase/firestore";
import { db } from '../../services/firebaseConfig'

import Navbar from "../../components/Navbar"
import styles from "./Game.module.css"

function Game(){
  const [imagemEscolhida, setImagemEscolhida] = useState('')
  const { categoriaSelecionada } = useCategory()
  const [imageLinks1, setImageLinks1] = useState();
  const [imageLinks2, setImageLinks2] = useState();

  function reiniciarPagina() {
    window.location.reload();
  }

  const verificarID_gato = async (id) => {
    const queryRef = doc(db, "imagem", id)
    const querySnapshot = await getDoc(queryRef);
    if (!querySnapshot.exists()) {
      try{
        await setDoc(queryRef, {
          url: `https://cdn2.thecatapi.com/images/${id}.jpg`,
          contagem: 0
        })
      } catch(error){
        console.error("erro" + error)
      }
    }
  };

  const verificarID_cachorro = async (id) => {
    const queryRef = doc(db, "imagem", id)
    const querySnapshot = await getDoc(queryRef);
    if (!querySnapshot.exists()) {
      try{
        await setDoc(queryRef, {
          url: `https://cdn2.thedogapi.com/images/${id}.jpg`,
          contagem: 0
        })
      } catch(error){
        console.error("erro" + error)
      }
    }
  };
  
  const buscarImagemGato = async () => {
    try {
      const response1 = await Gatos.get('/')
      const response2 = await Gatos.get('/')

      const imageUrl = response1.data[0].url
      const imageUr2 = response2.data[0].url
      
      const id1 = response1.data[0].id
      const id2 = response2.data[0].id

      setImageLinks1(imageUrl)
      setImageLinks2(imageUr2)

      verificarID_gato(id1)
      verificarID_gato(id2)

    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  const buscarImagemCachorro = async () => {
    try{
      const response1 = await Cachorros.get('/')
      const response2 = await Cachorros.get('/')

      const imageUrl = response1.data[0].url
      const imageUr2 = response2.data[0].url
      
      const id1 = response1.data[0].id
      const id2 = response2.data[0].id

      setImageLinks1(imageUrl)
      setImageLinks2(imageUr2)

      verificarID_cachorro(id1)
      verificarID_cachorro(id2)

    } catch(error){

    }
  }

  async function updateURLCount() {
    const imagemRef = collection(db, "imagem");
    const q = query(imagemRef, where("url", "==", `${imagemEscolhida}`));
  
    const querySnapshot = await getDocs(q);
  
    for (const doc of querySnapshot.docs) {
      try {
        const documento = await getDoc(doc.ref);
        const contagem = documento.data().contagem;
  
        await updateDoc(doc.ref, { contagem: contagem + 1 });
      } catch (error) {
        console.error('Erro ao atualizar contagem:', error);
      }
    }
    reiniciarPagina()
  }

  useEffect(() => {
    if(categoriaSelecionada === "Gatos"){
      buscarImagemGato();
    }
    else if(categoriaSelecionada === "Cachorros"){
      buscarImagemCachorro();
    }
  }, [])

  return(
    <div>  
      <Navbar />      
      <div><p className={styles.quest}>Qual você prefere?</p></div>
        <div className={styles.container}>
          <img src={imageLinks1} alt="Animal 1" className={styles.card} onClick={(e)=>{setImagemEscolhida(imageLinks1)}}/>
          <p className={styles.text}>OU</p>
          <img src={imageLinks2} alt="Animal 2" className={styles.card} onClick={(e)=>{setImagemEscolhida(imageLinks2)}}/>
        </div>
        <button className={styles.nextbutton} onClick={(updateURLCount)}>Próximo</button>
    </div>      
  )
}

export default Game