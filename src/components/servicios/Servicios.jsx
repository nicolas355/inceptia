import styles from "../servicios/servicios.module.css";

import link from "../../assets/images/enlace.png";
import figura from "../../assets/images/figura.png";
import services from "../data/data";

const Servicios = () => {
  return (
    <div>
      <div className={styles.bg}>
        <div className={` ${styles.contenedorServices}  `}>
          <div className={styles.figureGrid}>
            <div className={styles.contenedorTitle}>
              <h2 className={styles.titulo}>Nuestros Servicios</h2>
              <p className={styles.content}>
                {" "}
                Ofrecemos una variedad de servicios relacionados con la
                inteligencia artificial y la automatización para optimizar la
                gestión de contactos con clientes.{" "}
              </p>
            </div>

            <div className={styles.contenedorImg}>
              <img className={styles.imgFigura} src={figura} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={` ${styles.gridCajas} `}>
          {services.map((servicios) => (
        <div className={styles.caja}>
            <div key={services}>
              <h2 className={styles.title}>{servicios.title} </h2>
              <p className={styles.parrafo}>{servicios.paragraph}</p>

              <div className={styles.image}>
                <img className={styles.imgLink} src={link} width={30} alt="" />
              </div>
            </div>
        </div>
          ))}
      </div>
    </div>
  );
};

export default Servicios;
