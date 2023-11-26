import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
 return (
  <div className={styles.notFound}>
    <a href='/categories'><button className={styles.voltar}>Voltar</button></a>
  </div>
 );
};

export default NotFound;
