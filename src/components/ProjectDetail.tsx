import Image from 'next/image'
import Link from 'next/link'
import type { ImageData } from '@/data/homepage'
import type { ProjectDetailData } from '@/data/projects'

function ProjectImage({ image, priority = false }: { image: ImageData; priority?: boolean }) {
  if (!image.src) return null
  return <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 55vw" priority={priority} />
}

function ProjectHeader({ image }: { image: ImageData }) {
  return <div className={`project-header${image.src ? '' : ' without-image'}`}>
    {image.src ? <Image src={image.src} alt={image.alt} fill sizes="100vw" priority /> : <div className="project-header-fallback" aria-hidden="true" />}
    <div className="project-header-shade" />
    <div className="hero-pattern" />
  </div>
}

function assetKey(src?: string) {
  return src?.split(/[?#]/, 1)[0].replace(/\/$/, '') ?? ''
}

export function ProjectDetail({ project }: { project: ProjectDetailData }) {
  const headerAsset = assetKey(project.image.src)
  const leadGalleryItem = project.gallery.find((item) => assetKey(item.image.src) !== headerAsset)
  const gallery = project.gallery.filter((item) => item !== leadGalleryItem && assetKey(item.image.src) !== headerAsset)
  const facts = [
    project.client ? { label: 'Klant', value: project.client } : undefined,
    project.sector ? { label: 'Sector', value: project.sector } : undefined,
    project.year ? { label: 'Realisatie', value: project.year } : undefined,
    project.period ? { label: 'Periode', value: project.period } : undefined,
    project.summary ? { label: 'Scope', value: project.summary } : undefined,
  ].filter(Boolean) as Array<{ label: string; value: string }>
  const hasMetadata = facts.length > 0 || project.disciplines.length > 0

  return <main id="main-content">
    <ProjectHeader image={project.image} />
    <article className="project-case container">
      <h1>{project.title}</h1>
      <div className={`project-case-grid${leadGalleryItem ? '' : ' without-lead-image'}`}>
        {leadGalleryItem && <figure className="project-lead-image"><ProjectImage image={leadGalleryItem.image} /></figure>}
        <div className="project-story">
          {project.contentSections.map((section) => <section className={`project-story-section ${section.theme}`} key={`${section.eyebrow}-${section.title}`}>
            <div className={`project-story-copy ${section.layout}`}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
            {section.image?.src && <div className="project-story-image"><ProjectImage image={section.image} /></div>}
          </section>)}
        </div>
        {hasMetadata && <aside className="project-meta" aria-label="Projectgegevens">
          {facts.length > 0 && <dl className="project-facts">{facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>}
          {project.disciplines.length > 0 && <div className="project-meta-disciplines"><h2>Betrokken disciplines</h2><ul>{project.disciplines.map((item) => <li key={item.href}><Link href={item.href}>{item.title}</Link></li>)}</ul></div>}
        </aside>}
      </div>
    </article>

    {gallery.length > 0 && <section className="project-gallery"><div className="container"><span className="eyebrow">Projectbeelden</span><h2>In de praktijk<span className="dot">.</span></h2><div className="gallery-grid">{gallery.map((item, index) => <figure key={`${item.image.src}-${index}`}><div><ProjectImage image={item.image} /></div>{item.caption && <figcaption>{item.caption}</figcaption>}</figure>)}</div></div></section>}

    {project.cta && <section className="service-cta project-cta"><div className="container service-cta-inner"><div><span className="eyebrow">Maak contact</span><h2>{project.cta.title}<span className="dot">.</span></h2></div><div><p>{project.cta.body}</p><Link className="pill-button" href={project.cta.buttonHref}>{project.cta.buttonLabel} <span aria-hidden="true">↗</span></Link></div></div></section>}
  </main>
}
