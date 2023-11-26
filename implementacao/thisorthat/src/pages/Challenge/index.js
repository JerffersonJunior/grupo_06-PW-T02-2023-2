import React, { useState, useEffect } from 'react';
import { Gatos, Cachorros, Patos, Raposas, Quokkas, Cafe } from '../../services/api';
import { useCategory } from '../../contexts/CategoryContext';
import Navbar from '../../components/Navbar';
import styles from './Challenge.module.css';

function Game() {
  const [imagemEscolhida, setImagemEscolhida] = useState('');
  const { categoriaSelecionada } = useCategory();
  const [imageLinks, setImageLinks] = useState([]);
  const [seconds, setSeconds] = useState(10); 
  const [timerExpired, setTimerExpired] = useState(false); 

  async function handleChoice(e) {
    e.preventDefault();
    window.location.reload(false);
  }

  useEffect(() => {
    const fetchImages = async () => {
      try {
        if (categoriaSelecionada === 'Gatos') {
          const response1 = await Gatos.get('/');
          const response2 = await Gatos.get('/');
          const data1 = response1.data;
          const data2 = response2.data;
          setImageLinks([data1[0].url, data2[0].url]);
        } else if (categoriaSelecionada === 'Cachorros') {
          const response1 = await Cachorros.get('/');
          const response2 = await Cachorros.get('/');
          const data1 = response1.data;
          const data2 = response2.data;
          setImageLinks([data1.url, data2.url]);
        } else if (categoriaSelecionada === 'Patos') {
          const response1 = await Patos.get('/');
          const response2 = await Patos.get('/');
          const data1 = response1.data;
          const data2 = response2.data;
          setImageLinks([data1.message, data2.message]);
        } else if (categoriaSelecionada === 'Raposas') {
          const response1 = await Raposas.get('/');
          const response2 = await Raposas.get('/');
          const data1 = response1.data;
          const data2 = response2.data;
          setImageLinks([data1.image, data2.image]);
        } else if (categoriaSelecionada === 'Quokkas') {
          const response1 = await Quokkas.get('/');
          const response2 = await Quokkas.get('/');
          const data1 = response1.data;
          const data2 = response2.data;
          setImageLinks([data1.image, data2.image]);
        } else if (categoriaSelecionada === 'Cafe') {
          const response1 = await Cafe.get('/');
          const response2 = await Cafe.get('/');
          const data1 = response1.data;
          const data2 = response2.data;
          setImageLinks([data1.file, data2.file]);
        }
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    };

    fetchImages();
  }, [categoriaSelecionada]);

  // Implementação do timer
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

  return (
    <div>
      <Navbar />
      <div><p className={styles.pergunta}>Qual você prefere?</p></div>
      <div className={styles.container}>
        <img
          src={imageLinks[0]} alt="Animal 1" className={styles.card} onClick={(e) => {setImagemEscolhida(imageLinks[0]);}}/>
        <p className={styles.text}>OU</p>
        <img src={imageLinks[1]} alt="Animal 2" className={styles.card} onClick={(e) => { setImagemEscolhida(imageLinks[1]);}}/>
      </div>
      <div className={styles.timer}>
        <h1>{seconds}</h1>
        {timerExpired && <p className={styles.textTime}>TEMPO ESGOTADO!</p>}
      </div>
      <button className={styles.nextbutton} onClick={handleChoice}>
        Próximo
      </button>
    </div>
  );
}

export default Game
