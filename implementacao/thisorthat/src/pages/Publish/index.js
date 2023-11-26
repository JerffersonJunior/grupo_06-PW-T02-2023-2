import styles from './Publish.module.css'

import Navbar from '../../components/Navbar'

function Publish(){
return(
  <div>
      <Navbar />
      <div className>
          <form action="/forum">
            <label className={styles.labelcoment} for="Comentario">Publicação do Fórum</label>
            <input className={styles.inputcoment} type="text" id="Comentario" name="Comentario" placeholder="Comentar"/>
            <button className={styles.nextbutton} >Enviar</button>
        </form>
      </div>
  </div>
)
}

export default Publish;
