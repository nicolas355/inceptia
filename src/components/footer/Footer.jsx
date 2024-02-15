import React from 'react'
import footer from '../../assets/images/logo.png'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div>
      

      <footer>
        <div className={styles.contenedorFooter}>
            <img className={styles.imagen} src={footer} alt="logo_footer_Inceptia" />
            <p className={styles.parrafo}>Sofware IA Copyright @{new Date().getFullYear()} Todos los derechos reservados </p>
        </div>
      </footer>

    </div>
  )
}

export default Footer
