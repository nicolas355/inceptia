import styles from "./contacto.module.css";
import hero from "../../assets/images/contacto.png";
import '../../index.css'
const Contacto = () => {
  return (
    <div>

    
      <div className={`${styles.bg} ` }>
        <section className={styles.grid}>
          <form className={styles.form} action="">
            <h2 className={styles.contactoTitle}>Contactanos</h2>
            <div className={styles.contenedorInputs}>
              <input className={styles.input} type="text" placeholder="Nombre" />
              <input className={styles.input} type="email" placeholder="Email" />
            </div>
            <div>
              <textarea className={styles.mensaje} placeholder="Mensaje" rows="10"></textarea>
            </div>

            <button className={styles.button}>Enviar</button>
          </form>

          <div className={styles.contenedorImg}>
            <img src={hero} className={styles.imgContact} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacto;
