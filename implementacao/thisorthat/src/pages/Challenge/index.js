import React, { useState, useEffect } from 'react';
import { useCategory } from '../../contexts/CategoryContext';
import { collection, getDocs, updateDoc, getDoc, doc } from "firebase/firestore";
import { db } from '../../services/firebaseConfig';
import Navbar from "../../components/Navbar";
import styles from "./Challenge.module.css";

function Challenge() {
  const [imagemEscolhida, setImagemEscolhida] = useState('');
  const { categoriaSelecionada } = useCategory();
  const [imageLinks1, setImageLinks1] = useState('');
  const [imageLinks2, setImageLinks2] = useState('');
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [seconds, setSeconds] = useState(10); 
  const [timerExpired, setTimerExpired] = useState(false); 


  function reiniciarPagina() {
    window.location.reload();
  }

  const verificarID = async (id) => {
    const queryRef = doc(db, "imagem", id);
    const querySnapshot = await getDoc(queryRef);
    if (!querySnapshot.exists()) {
      try {
        await updateDoc(queryRef, {
          url: `https://cdn2.thecatapi.com/images/${id}.jpg`,
          contagem: 0
        });

      } catch (error) {
        console.error("erro" + error);
      }
    }
  };

  const buscarImagem = async () => {
    try {
      const response1 = await fetch('https://api.thecatapi.com/v1/images/search');
      const response2 = await fetch('https://api.thecatapi.com/v1/images/search');

      const data1 = await response1.json();
      const data2 = await response2.json();

      const imageUrl1 = data1[0].url;
      const imageUrl2 = data2[0].url;

      setImageLinks1(imageUrl1);
      setImageLinks2(imageUrl2);

      const id1 = imageUrl1.split('/').pop();
      const id2 = imageUrl2.split('/').pop();

      verificarID(id1);
      verificarID(id2);

      const doc1 = await getDoc(doc(db, "imagem", id1));
      const doc2 = await getDoc(doc(db, "imagem", id2));

      const contagem1 = doc1.data().contagem;
      const contagem2 = doc2.data().contagem;

      const totalContagem = contagem1 + contagem2;

      setPercentage1((contagem1 / totalContagem) * 100);
      setPercentage2((contagem2 / totalContagem) * 100);

    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        setTimerExpired(true);
        clearInterval(timer);
      }
    }, 1000);

    // Limpar o timer quando o componente for desmontado
    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  async function updateURLCount(id) {
    try {
      const imagemRef = doc(db, "imagem", id);
      const querySnapshot = await getDoc(imagemRef);
  
      if (querySnapshot.exists()) {
        const contagem = querySnapshot.data().contagem || 0;
  
        await updateDoc(imagemRef, { contagem: contagem + 1 });
      } else {
        // Handle the case where the document does not exist
        console.error("Document does not exist for id:", id);
      }
    } catch (error) {
      console.error('Erro ao atualizar contagem:', error);
    }
  }

  useEffect(() => {
    if (categoriaSelecionada === "Gatos") {
      buscarImagem();
    } else if (categoriaSelecionada === "Cachorros") {
      // Implement fetching dog images if needed
    }
  }, [categoriaSelecionada]);

  const handleImageClick = (selectedImage) => {
    setImagemEscolhida(selectedImage);
    updateURLCount(selectedImage.split('/').pop());
  };

  return (
    <div>
      <Navbar />
      <div>
        <p className={styles.quest}>Qual você prefere?</p>
      </div>
      <div className={styles.container}>
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <img
            src={imageLinks1}
            alt="Animal 1"
            className={styles.card}
            onClick={() => handleImageClick(imageLinks1)}
          />
          {imagemEscolhida === imageLinks1 && (
            <p className={styles.percentage}>
              {percentage1.toFixed(2)}%
            </p>
          )}
        </div>
        <p className={styles.text}>OU</p>
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <img
            src={imageLinks2}
            alt="Animal 2"
            className={styles.card}
            onClick={() => handleImageClick(imageLinks2)}
          />
          {imagemEscolhida === imageLinks2 && (
            <p className={styles.percentage}>
              {percentage2.toFixed(2)}%
            </p>
          )}
        </div>
      </div>
      <div className={styles.timer}>
        {timerExpired ? (<p className={styles.textTime}>TEMPO ESGOTADO!</p>) : (<h1 className={styles.textTime}>{seconds}</h1>)}
      </div>
      <button className={styles.nextbutton} onClick={() => { reiniciarPagina() }}>
        Próximo
      </button>
    </div>
  );
}

export default Challenge;
