import Image from 'next/image'
import Link from 'next/link'
import type { ProjectSummaryData } from '@/data/projects'

export function ProjectOverview({ projects }: { projects: ProjectSummaryData[] }) {
  return <main id="main-content">
    <section className="overview-hero"><div className="hero-pattern" /><div className="container overview-hero-content"><span className="eyebrow light">Projecten</span><h1>Techniek bewezen in de praktijk<span className="dot">.</span></h1><p>Projecten waarin engineering, automatisering en uitvoering samenkomen binnen een concrete industriële context.</p></div></section>
    <section className="project-overview-section"><div className="container">
      <div className="section-intro"><div><span className="eyebrow">Projectreferenties</span><h2>Projecten<span className="dot">.</span></h2></div><p>Een selectie van projecten met uitsluitend publiek gevalideerde informatie.</p></div>
      <div className="project-overview-grid">{projects.map((project) => <Link href={`/projecten/${project.slug}`} className="project-overview-card" key={project.slug}>
        <div className="project-overview-image">{project.image.src && <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 767px) 100vw, 50vw" />}</div>
        <div className="project-overview-copy"><span>{[project.sector, project.period || project.year].filter(Boolean).join(' · ')}</span><h2>{project.title}</h2>{project.client && <p>Opdrachtgever: {project.client}</p>}<b>Bekijk project <i aria-hidden="true">→</i></b></div>
      </Link>)}</div>
    </div></section>
  </main>
}
