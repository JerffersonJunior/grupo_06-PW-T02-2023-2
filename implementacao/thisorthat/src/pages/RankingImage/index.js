import { useEffect, useState } from "react"
import styles from './Ranking.module.css'
import Navbar from '../../components/Navbar'
import { collection, limit, orderBy, query, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

function Ranking(){
  const [imagens, setImagens] = useState([]);
  
  const buscarTop10Imagens = async () => {
    try {
      const imagensRef = collection(db, 'imagem');
      const querySnapshot = await getDocs(query(imagensRef, orderBy("contagem", "desc"), limit(10)));
      const top10Imagens = querySnapshot.docs.map(doc => doc.data());
      return top10Imagens;
    } catch (error) {
      console.error('Erro ao buscar as 10 primeiras imagens:', error);
    }
  };

  useEffect(() => {
    const buscarImagens = async () => {
      const top10Imagens = await buscarTop10Imagens();
      setImagens(top10Imagens);
    };
    buscarImagens();
   }, []);
 
  return(
    <div>
      <Navbar/>
      <p className={styles.rank}>Rank de Escolhas</p>
      {imagens.map((imagem)=>{
        return(
          <table className={styles.ranktable}>
            <div className={styles.container}>
              <img src={imagem.url} alt="Foto da imagem" className={styles.cardRank}/>
                  <div>
                    <th><h1 className={styles.contagem}>{imagem.contagem}</h1></th>
                  </div>
            </div>    
        </table>
        )
      })}
    </div>
  )
}

export default Ranking