import Link from 'next/link'
import styles from './../../styles/Home.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <ul className={styles.navList}>
          <li><Link href="/#web" scroll={false}>Web</Link></li>
          <li><Link href="/#apps" scroll={false}>Aplicaciones</Link></li>
          <li><Link href="/#design" scroll={false}>Diseño</Link></li>
          <li><Link href="/#otros" scroll={false}>Otros</Link></li>
        </ul>
      </div>
    </nav>
  )
}