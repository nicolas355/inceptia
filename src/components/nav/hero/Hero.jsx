import React from "react";
import hero from "../../../assets/images/hero.png";
import styles from '../hero/hero.module.css'


const Hero = () => {
  return (
    <div>
      <div className={`${styles.grid} contenedor`} >
        <div className={`${styles.contenido}`}>
          <h1 className={styles.h1}>
          Plataforma integrada de Robots de voz y <span className={styles.chats}>Chats</span> basados en Inteligencia Artificial          </h1>
          <p className={styles.parrafo}>
          Potencia Ilimitada en Conversaciones, Resultados Inigualables
          </p>
          <p className={styles.parrafo}>
          Con nuestra plataforma, puedes automatizar escenarios de negocio, gestionar campañas de cobranza, recibir solicitudes de voz y texto, y mucho más.
          </p>
          <div className={styles.contenedor_cta}>

          <a className={styles.cta} href="">
          Solicita una demo
          </a>
          </div>


        </div>

        <div className={styles.contenedor_img}>
          <img className={styles.img_hero} src={hero} alt="hero_inceptia" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
