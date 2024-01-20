import styles from "./contacto.module.css";
import hero from "../../assets/images/contacto.jpg";
import '../../index.css'
const Contacto = () => {
  return (
    <div>

    
      <div className={`contenedor`}>
        <section className={styles.grid}>
          <form action="">
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

          <div>
            <img src={hero} className={styles.imgContact} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacto;
