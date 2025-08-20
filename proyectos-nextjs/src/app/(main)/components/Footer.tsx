import styles from './../../styles/Home.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Mis Proyectos. Todos los derechos reservados.</p>
        <div className={styles.socialLinks}>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  )
}