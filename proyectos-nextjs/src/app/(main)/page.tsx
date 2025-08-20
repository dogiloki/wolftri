import projectsData from './../data/projects.json'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'
import styles from './../styles/Home.module.css'

interface ProjectsData {
  web: Project[]
  apps: Project[]
  design: Project[]
  otros: Project[]
}

interface Project {
  title: string
  description: string
  image: string
  demoLink: string
  downloadLink: string
}

export default function Home() {
  const { web, apps, design, otros } = projectsData as ProjectsData

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <h1>Mis Proyectos</h1>
          <p>Explora mi trabajo y descarga lo que necesites</p>
        </div>
      </header>

      <Navbar />

      <main className="container">
        <section id="web" className={styles.section}>
          <h2><i className="fas fa-globe"></i> Proyectos Web</h2>
          <div className={styles.projectsGrid}>
            {web.map((project, index) => (
              <ProjectCard key={`web-${index}`} project={project} />
            ))}
          </div>
        </section>

        <section id="apps" className={styles.section}>
          <h2><i className="fas fa-mobile-alt"></i> Aplicaciones</h2>
          <div className={styles.projectsGrid}>
            {apps.map((project, index) => (
              <ProjectCard key={`app-${index}`} project={project} />
            ))}
          </div>
        </section>

        <section id="design" className={styles.section}>
          <h2><i className="fas fa-paint-brush"></i> Diseño</h2>
          <div className={styles.projectsGrid}>
            {design.map((project, index) => (
              <ProjectCard key={`design-${index}`} project={project} />
            ))}
          </div>
        </section>

        <section id="otros" className={styles.section}>
          <h2><i className="fas fa-ellipsis-h"></i> Otros Proyectos</h2>
          <div className={styles.projectsGrid}>
            {otros.map((project, index) => (
              <ProjectCard key={`other-${index}`} project={project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}