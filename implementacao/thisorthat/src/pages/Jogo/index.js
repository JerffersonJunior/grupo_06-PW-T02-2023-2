import React, { useState, useEffect } from 'react'
import { Gatos, Cachorros, Patos, Raposas } from '../../services/api'
import { useCategory } from '../../contexts/CategoryContext';

import Navbar from "../../components/Navbar"
import styles from "./Jogo.module.css"

function Jogo(){
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
            else if(categoriaSelecionada === "Cachorros"){
              const response1 = await Cachorros.get('/');
              const response2 = await Cachorros.get('/');

              const data1 = response1.data;
              const data2 = response2.data;
      
              setImageLinks([data1.url, data2.url]);
            }
            else if(categoriaSelecionada === "Patos"){
              const response1 = await Patos.get('/');
              const response2 = await Patos.get('/');

              const data1 = response1.data;
              const data2 = response2.data;
      
              setImageLinks([data1.message, data2.message]);
           }
            else if(categoriaSelecionada === "Raposas"){
              const response1 = await Raposas.get('/');
              const response2 = await Raposas.get('/');

              const data1 = response1.data;
              const data2 = response2.data;
      
              setImageLinks([data1.image, data2.image]);
          }


          } catch (error) {
            console.error('Erro ao buscar imagens:', error);
          }
        };
    
        fetchImages();
      }, [categoriaSelecionada]);

    return(
        <div>  
            <Navbar />
            {imageLinks.map((link, index) => (
          <img key={index} src={link} alt={`Animal ${index + 1}`} className={styles.card} />
        ))}
        </div>
    )
}

export default Jogo