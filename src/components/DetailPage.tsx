import Image from 'next/image'
import Link from 'next/link'
import type { DetailPageConfig, DetailPageData } from '@/data/detailPage'
import { FAQ } from './FAQ'

function Picture({ src, alt, className, priority = false }: { src?: string; alt: string; className?: string; priority?: boolean }) {
  return src ? <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 55vw" className={className} loading={priority ? 'eager' : 'lazy'} /> : <div className="image-fallback" aria-hidden="true"><span>PSX</span></div>
}

function TitleDot({ title }: { title: string }) {
  return /[.!?]$/.test(title) ? null : <span className="dot">.</span>
}

function standardsTitle(standards: DetailPageData['standards']) {
  const types = standards.map((item) => item.type.toLowerCase())
  const hasStandards = types.some((type) => type.includes('standard') || type.includes('norm'))
  const hasCertifications = types.some((type) => type.includes('certific'))

  if (hasStandards && !hasCertifications) return 'Normen & standaarden'
  if (hasCertifications && !hasStandards) return 'Certificeringen'
  return 'Certificeringen & standaarden'
}

export function DetailPage({ detail, config = {} }: { detail: DetailPageData; config?: DetailPageConfig }) {
  return <main id="main-content">
    <section className="service-hero"><Picture src={detail.heroImage.src} alt={detail.heroImage.alt} priority /><div className="hero-shade" /><div className="hero-pattern" /><div className="container service-hero-content"><span className="eyebrow light">{detail.eyebrow}</span><h1>{detail.heroTitle}<span className="dot">.</span></h1><p>{detail.heroIntro}</p></div></section>

    {detail.intro && <section className="service-intro"><div className="container service-intro-grid"><div><span className="eyebrow">{detail.title}</span><h2>{detail.intro.title}<span className="dot">.</span></h2><p>{detail.intro.body}</p></div>{detail.intro.image && <div className="service-intro-image"><Picture src={detail.intro.image.src} alt={detail.intro.image.alt} /></div>}</div></section>}

    {detail.capabilities.length > 0 && <section className="capabilities-section"><div className="container"><div className="section-intro"><div><span className="eyebrow">{detail.capabilitiesEyebrow || 'Wat we doen'}</span><h2>{detail.capabilitiesTitle || 'Werkzaamheden'}<TitleDot title={detail.capabilitiesTitle || 'Werkzaamheden'} /></h2></div><p>{detail.shortSummary}</p></div><div className="capability-grid" data-count={detail.capabilities.length}>{detail.capabilities.map((item, index) => <article key={item.title}><span>[{String(index + 1).padStart(2, '0')}]</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>}

    {detail.contentSections?.map((section) => <section className={`detail-content-section ${section.theme}`} key={`${section.eyebrow}-${section.title}`}><div className={`container detail-content-grid ${section.layout}`}><div className="detail-content-copy">{section.eyebrow && <span className={`eyebrow ${section.theme === 'dark' ? 'light' : ''}`}>{section.eyebrow}</span>}<h2>{section.title}<TitleDot title={section.title} /></h2><p>{section.body}</p></div>{section.image && <div className="detail-content-image"><Picture src={section.image.src} alt={section.image.alt} /></div>}</div></section>)}

    {detail.featuredLinks.map((item) => <section className="service-expertise" key={item.href}><div className="container expertise-feature"><div><span className="eyebrow light">Specialistische expertise</span><h2>{item.title}<span className="dot">.</span></h2></div><div><p>{item.summary}</p><Link className="pill-button light-pill" href={item.href}>Meer over {item.title} <span aria-hidden="true">→</span></Link></div></div></section>)}

    {detail.relatedLinks.length > 0 && <section className="related-services-section"><div className="container"><span className="eyebrow">{config.relatedLinksEyebrow || 'Aansluitende diensten'}</span><div className="related-services-grid">{detail.relatedLinks.map((item) => <article key={item.href}><div><h2>{item.title}<TitleDot title={item.title} /></h2><p>{item.summary}</p></div><Link className="text-link" href={item.href}>Meer over {item.title} <span aria-hidden="true">→</span></Link></article>)}</div></div></section>}

    {detail.standards.length > 0 && <section className="standards-section"><div className="container"><span className="eyebrow">Kwaliteit & zekerheid</span><h2>{standardsTitle(detail.standards)}<span className="dot">.</span></h2><div className="standards-grid">{detail.standards.map((item) => <article key={item.name}><small>{item.type}</small><h3>{item.name}</h3>{item.description && <p>{item.description}</p>}</article>)}</div></div></section>}

    {detail.process.length > 0 && <section className="process-section"><div className="container"><span className="eyebrow">Van vraagstuk naar uitvoering</span><h2>Werkwijze<span className="dot">.</span></h2><div className="process-list">{detail.process.map((item) => <article key={`${item.number}-${item.title}`}><span>[{item.number}]</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>}

    {detail.projects.length > 0 && <section className="projects-section"><div className="container"><div className="section-intro"><div><span className="eyebrow">Bewezen in de praktijk</span><h2>Gerelateerde projecten<span className="dot">.</span></h2></div></div><div className="project-list">{detail.projects.map((project, index) => <Link className="project-card" href={project.href} key={project.href}><div className="project-image"><Picture src={project.image.src} alt={project.image.alt} /></div><div className="project-copy"><span>{project.meta}</span><div><b>[{String(index + 1).padStart(2, '0')}]</b><h3>{project.title}</h3></div></div></Link>)}</div></div></section>}

    {detail.faq.length > 0 && <section className="faq-section"><div className="container faq-layout"><div><span className="eyebrow">Veelgestelde vragen</span><h2>FAQ<span className="dot">.</span></h2></div><FAQ items={detail.faq} /></div></section>}

    {detail.cta && <section className="service-cta"><div className="container service-cta-inner"><div><span className="eyebrow">Maak contact</span><h2>{detail.cta.title}<TitleDot title={detail.cta.title} /></h2></div><div><p>{detail.cta.body}</p><Link className="pill-button" href={detail.cta.buttonHref}>{detail.cta.buttonLabel} <span aria-hidden="true">↗</span></Link></div></div></section>}
  </main>
}
