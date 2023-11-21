import React, { useState, useEffect } from 'react'
import Gatos from '../../services/api'
import { useCategory } from '../../contexts/CategoryContext';

import styles from "./Jogo.module.css"

function Jogo({categoria}){
  const { categoriaSelecionada } = useCategory()
    const [imageLinks, setImageLinks] = useState([]);
    
    useEffect(() => {
        const fetchImages = async () => {
          try {
            if(categoriaSelecionada === "Gatos"){
                const response1 = await Gatos.get('/');
                const response2 = await Gatos.get('/');

                const data1 = response1.data;
                const data2 = response2.data;
        
                setImageLinks([data1[0].url, data2[0].url]);
            }

          } catch (error) {
            console.error('Erro ao buscar imagens:', error);
          }
        };
    
        fetchImages();
      }, [categoriaSelecionada]);

    return(
        <div>  
            {imageLinks.map((link, index) => (
          <img key={index} src={link} alt={`Gato ${index + 1}`} className={styles.card} />
        ))}
        </div>
    )
}

export default Jogo