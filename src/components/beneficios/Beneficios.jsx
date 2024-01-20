import styles from "./beneficios.module.css";
import optimizar from "../../assets/images/optimizar.png";
import beneficios from "../../assets/images/beneficios.png";
const Beneficios = () => {
  return (
    <div>
      <div className={`contenedor`}>
        <h2>Por Qué Elegirnos</h2>
        <h3>Beneficios </h3>

        <section className={styles.grid}>
          <div>
            <div className={styles.flex}>
              <div>
                <img width={75} src={optimizar} alt="imagen_optimizar" />
              </div>

              <div>
                <h3>Potencia y Eficiencia </h3>
                <p>
         Ofrecemos una capacidad excepcional de potencia y fuerza bruta en cada campaña. Con una frecuencia de llamadas y mensajes ajustable a tus necesidades, garantizamos resultados que rivalizan e incluso superan a los call centers, ¡a solo la mitad del costo!
                </p>
              </div>
            </div>

            <div className={styles.flex}>
              <div>
                <img width={75} src={optimizar} alt="imagen_optimizar" />
              </div>

              <div>
                <h3> Atención al Cliente Inigualable </h3>
                <p>
                Respuestas Instantáneas, Siempre: En Inceptia, entendemos la importancia de la atención al cliente. Ofrecemos respuestas inmediatas y personalizadas, incluso en los momentos menos esperados, como los viernes, sábados o días feriados. Tu satisfacción es nuestra prioridad, y nuestra disponibilidad constante es tu garantía de tranquilidad
                </p>
              </div>
            </div>



            <div className={styles.flex}>
              <div>
                <img width={75} src={optimizar} alt="imagen_optimizar" />
              </div>

              <div>
                <h3>Optimizar Trabajo </h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil, officia.
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
