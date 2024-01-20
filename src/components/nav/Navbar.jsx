import logo from "../../assets/images/logo_inceptia.jpg";
import styles from '../nav/navbar.module.css'
import Hero from "./hero/Hero";
import '../../index.css'
import Hamburguer from "../../icons/hamburguer";
const Navbar = () => {
  return (
    <div>



      <div className={styles.background}>

      <div className={`${styles.contenedor_content} contenedor`} >
        <div className="logo">
         <h1 className={styles.h1}>INCEPT<span className={styles.span}>IA</span></h1>
        </div>

        <div className={styles.menuDeskop}>
          <nav>
            <ul className={styles.contenedor_menu}>
              <li>
                <a className={styles.enlace} href="#">Home</a>
              </li>

              <li>
                <a className={styles.enlace} href="#">Services</a>
              </li>

              <li>
                <a className={styles.enlace} href="#">Beneficios</a>
              </li>

           
           

              <li>
                <a className={styles.enlace} href="#">Nuestros clientes</a>
              </li>

              <li className={styles.roundend}>
                <a className={styles.enlace}  href="#">Contacto</a>
              </li>
            </ul>
          </nav>


       



        </div>


        <div className={styles.contenedorMobile}>
             <nav >


            <Hamburguer />
          </nav>

        </div>
      </div>
        <Hero/>
      </div>




      
    </div>
  );
};

export default Navbar;
