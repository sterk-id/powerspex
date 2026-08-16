import Image from 'next/image'
import Link from 'next/link'
import type { ImageData } from '@/data/homepage'
import type { ProjectDetailData } from '@/data/projects'

function ProjectImage({ image, priority = false }: { image: ImageData; priority?: boolean }) {
  if (!image.src) return null
  return <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 55vw" priority={priority} />
}

export function ProjectDetail({ project }: { project: ProjectDetailData }) {
  const facts = [
    project.client ? { label: 'Klant', value: project.client } : undefined,
    project.sector ? { label: 'Sector', value: project.sector } : undefined,
    project.period || project.year ? { label: 'Jaar', value: project.period || project.year || '' } : undefined,
    project.summary ? { label: 'Scope', value: project.summary } : undefined,
  ].filter(Boolean) as Array<{ label: string; value: string }>

  return <main id="main-content">
    <div className="project-masthead"><div className="hero-pattern" /></div>
    <article className="project-case container">
      <h1>{project.title}</h1>
      <div className="project-case-grid">
        <figure className="project-lead-image"><ProjectImage image={project.image} priority /></figure>
        <div className="project-story">
          {project.contentSections.map((section) => <section className={`project-story-section ${section.theme}`} key={`${section.eyebrow}-${section.title}`}>
            <div className={`project-story-copy ${section.layout}`}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
            {section.image?.src && <div className="project-story-image"><ProjectImage image={section.image} /></div>}
          </section>)}
        </div>
        <aside className="project-meta" aria-label="Projectgegevens">
          {facts.length > 0 && <dl className="project-facts">{facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>}
          {project.disciplines.length > 0 && <div className="project-meta-disciplines"><h2>Expertises &amp; disciplines</h2><ul>{project.disciplines.map((item) => <li key={item.href}><Link href={item.href}>{item.title}</Link></li>)}</ul></div>}
        </aside>
      </div>
    </article>

    {project.gallery.length > 0 && <section className="project-gallery"><div className="container"><span className="eyebrow">Projectbeelden</span><h2>In de praktijk<span className="dot">.</span></h2><div className="gallery-grid">{project.gallery.map((item, index) => <figure key={`${item.image.src}-${index}`}><div><ProjectImage image={item.image} /></div>{item.caption && <figcaption>{item.caption}</figcaption>}</figure>)}</div></div></section>}

    {project.cta && <section className="service-cta project-cta"><div className="container service-cta-inner"><div><span className="eyebrow">Maak contact</span><h2>{project.cta.title}<span className="dot">.</span></h2></div><div><p>{project.cta.body}</p><Link className="pill-button" href={project.cta.buttonHref}>{project.cta.buttonLabel} <span aria-hidden="true">↗</span></Link></div></div></section>}
  </main>
}
