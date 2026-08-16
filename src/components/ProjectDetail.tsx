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
    project.client ? { label: 'Opdrachtgever', value: project.client } : undefined,
    project.sector ? { label: 'Sector', value: project.sector } : undefined,
    project.period || project.year ? { label: 'Periode', value: project.period || project.year || '' } : undefined,
  ].filter(Boolean) as Array<{ label: string; value: string }>

  return <main id="main-content">
    <section className="project-hero">
      <ProjectImage image={project.image} priority />
      <div className="hero-shade" /><div className="hero-pattern" />
      <div className="container project-hero-content"><span className="eyebrow light">{project.heroEyebrow}</span><h1>{project.heroTitle}<span className="dot">.</span></h1><p>{project.heroIntro}</p></div>
    </section>

    {(facts.length > 0 || project.summary) && <section className="project-intro"><div className="container project-intro-grid">
      <div><span className="eyebrow">Project in beeld</span><h2>{project.title}<span className="dot">.</span></h2>{project.summary && <p>{project.summary}</p>}</div>
      {facts.length > 0 && <dl className="project-facts">{facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>}
    </div></section>}

    {project.contentSections.map((section) => <section className={`detail-content-section ${section.theme}`} key={`${section.eyebrow}-${section.title}`}><div className={`container detail-content-grid ${section.layout}${section.image?.src ? '' : ' text-only'}`}><div className="detail-content-copy">{section.eyebrow && <span className={`eyebrow ${section.theme === 'dark' ? 'light' : ''}`}>{section.eyebrow}</span>}<h2>{section.title}<span className="dot">.</span></h2><p>{section.body}</p></div>{section.image?.src && <div className="detail-content-image"><ProjectImage image={section.image} /></div>}</div></section>)}

    {project.disciplines.length > 0 && <section className="project-disciplines"><div className="container"><span className="eyebrow">Betrokken disciplines</span><h2>Techniek in samenhang<span className="dot">.</span></h2><div className="discipline-grid">{project.disciplines.map((item) => <Link href={item.href} key={item.href}><small>{item.type}</small><h3>{item.title}</h3><span>Bekijk discipline <b aria-hidden="true">→</b></span></Link>)}</div></div></section>}

    {project.gallery.length > 0 && <section className="project-gallery"><div className="container"><span className="eyebrow">Projectbeelden</span><h2>In de praktijk<span className="dot">.</span></h2><div className="gallery-grid">{project.gallery.map((item, index) => <figure key={`${item.image.src}-${index}`}><div><ProjectImage image={item.image} /></div>{item.caption && <figcaption>{item.caption}</figcaption>}</figure>)}</div></div></section>}

    {project.cta && <section className="service-cta"><div className="container service-cta-inner"><div><span className="eyebrow">Maak contact</span><h2>{project.cta.title}<span className="dot">.</span></h2></div><div><p>{project.cta.body}</p><Link className="pill-button" href={project.cta.buttonHref}>{project.cta.buttonLabel} <span aria-hidden="true">↗</span></Link></div></div></section>}
  </main>
}
