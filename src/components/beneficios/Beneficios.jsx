import styles from "./beneficios.module.css";
import optimizar from "../../assets/images/2.png";
import atencion from "../../assets/images/1.png";
import beneficios from "../../assets/images/beneficios.png";
const Beneficios = () => {
  return (
    <div className={styles.contenidoBeneficios}>
      <div className={`contenedor`}>
        <h2>Por Qué Elegirnos</h2>
        <h3 >Beneficios </h3>

        <section className={styles.grid}>
          <div>
            <div className={styles.flex}>
              <div>
                <img width={80} src={optimizar} alt="imagen_optimizar" />
              </div>

              <div>
                <h3 className={styles.title}>Potencia y Eficiencia </h3>
                <p className={styles.parrafo}>
                  Ofrecemos una capacidad excepcional de potencia y fuerza bruta
                  en cada campaña. Con una frecuencia de llamadas y mensajes
                  ajustable a tus necesidades, garantizamos resultados que
                  rivalizan e incluso superan a los call centers, ¡a solo la
                  mitad del costo!
                </p>
              </div>
            </div>

            <div className={styles.flex}>
              <div>
                <img  width={80} src={atencion} alt="imagen_optimizar" />
              </div>

              <div>
                <h3 className={styles.title}> Atención al Cliente Inigualable </h3>
                <p className={styles.parrafo}>
                Entendemos la importancia de brindar un servicio al cliente excepcional. Ofrecemos respuestas inmediatas y personalizadas. Tu satisfacción es nuestra prioridad, y nuestra disponibilidad constante es tu garantía de tranquilidad.
                </p>
              </div>
            </div>

      
          </div>

          <div>
            <img className={styles.imgRobot} src={beneficios} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Beneficios;
