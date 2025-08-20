import Link from 'next/link'
import styles from './../../styles/Home.module.css'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  image: string
  demoLink: string
  downloadLink: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <Image 
          src={project.image} 
          alt={project.title}
          width={400}
          height={200}
        />
      </div>
      <div className={styles.projectInfo}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.projectLinks}>
          <Link href={project.demoLink} className="btn btn-primary">Ver Demo</Link>
          <Link href={project.downloadLink} className="btn btn-secondary">Descargar</Link>
        </div>
      </div>
    </div>
  )
}