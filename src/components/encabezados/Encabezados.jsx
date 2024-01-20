import styles from "../encabezados/encabezados.module.css";
import lampara from "../../assets/images/lampara.svg";

const Servicio = ({ title, desc }) => {
  return (
    <div>
      <div className={`contenedor ${styles.flex}`}>
        <img className={styles.img} src={lampara} alt="" />
        <div className={styles.borderB}>
          <h2>{title} </h2>
        </div>
        <h3>{desc} </h3>
      </div>
    </div>
  );
};

export default Servicio;
