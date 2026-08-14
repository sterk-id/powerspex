import Image from 'next/image'
import Link from 'next/link'
import type { ServiceDetailData } from '@/data/services'
import { FAQ } from './FAQ'

function Picture({ src, alt, className }: { src?: string; alt: string; className?: string }) {
  return src ? <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 55vw" className={className} /> : <div className="image-fallback" aria-hidden="true"><span>PSX</span></div>
}

export function ServiceDetail({ service }: { service: ServiceDetailData }) {
  return <main id="main-content">
      <section className="service-hero">
        <Picture src={service.heroImage.src} alt={service.heroImage.alt} />
        <div className="hero-shade" /><div className="hero-pattern" />
        <div className="container service-hero-content"><span className="eyebrow light">{service.eyebrow}</span><h1>{service.heroTitle}<span className="dot">.</span></h1><p>{service.heroIntro}</p></div>
      </section>

      {service.intro && <section className="service-intro"><div className="container service-intro-grid">
        <div><span className="eyebrow">{service.title}</span><h2>{service.intro.title}<span className="dot">.</span></h2><p>{service.intro.body}</p></div>
        {service.intro.image && <div className="service-intro-image"><Picture src={service.intro.image.src} alt={service.intro.image.alt} /></div>}
      </div></section>}

      {service.capabilities.length > 0 && <section className="capabilities-section"><div className="container">
        <div className="section-intro"><div><span className="eyebrow">Wat we doen</span><h2>Werkzaamheden<span className="dot">.</span></h2></div><p>{service.shortSummary}</p></div>
        <div className="capability-grid">{service.capabilities.map((item, index) => <article key={item.title}><span>[{String(index + 1).padStart(2, '0')}]</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      </div></section>}

      {service.expertise.map((item) => <section className="service-expertise" key={item.href}><div className="container expertise-feature">
        <div><span className="eyebrow light">Specialistische expertise</span><h2>{item.title}<span className="dot">.</span></h2></div>
        <div><p>{item.summary}</p><Link className="pill-button light-pill" href={item.href}>Meer over {item.title} <span aria-hidden="true">→</span></Link></div>
      </div></section>)}

      {service.relatedServices.length > 0 && <section className="related-services-section"><div className="container"><span className="eyebrow">Aansluitende diensten</span><div className="related-services-grid">{service.relatedServices.map((item) => <article key={item.href}><div><h2>{item.title}<span className="dot">.</span></h2><p>{item.summary}</p></div><Link className="text-link" href={item.href}>Meer over {item.title} <span aria-hidden="true">→</span></Link></article>)}</div></div></section>}

      {service.standards.length > 0 && <section className="standards-section"><div className="container"><span className="eyebrow">Kwaliteit & zekerheid</span><h2>Certificeringen & standaarden<span className="dot">.</span></h2><div className="standards-grid">{service.standards.map((item) => <article key={item.name}><small>{item.type}</small><h3>{item.name}</h3>{item.description && <p>{item.description}</p>}</article>)}</div></div></section>}

      {service.process.length > 0 && <section className="process-section"><div className="container"><span className="eyebrow">Van vraagstuk naar uitvoering</span><h2>Werkwijze<span className="dot">.</span></h2><div className="process-list">{service.process.map((item) => <article key={`${item.number}-${item.title}`}><span>[{item.number}]</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>}

      {service.projects.length > 0 && <section className="projects-section"><div className="container"><div className="section-intro"><div><span className="eyebrow">Bewezen in de praktijk</span><h2>Gerelateerde projecten<span className="dot">.</span></h2></div></div><div className="project-list">{service.projects.map((project, index) => <Link className="project-card" href={project.href} key={project.href}><div className="project-image"><Picture src={project.image.src} alt={project.image.alt} /></div><div className="project-copy"><span>{project.meta}</span><div><b>[{String(index + 1).padStart(2, '0')}]</b><h3>{project.title}</h3></div></div></Link>)}</div></div></section>}

      {service.faq.length > 0 && <section className="faq-section"><div className="container faq-layout"><div><span className="eyebrow">Veelgestelde vragen</span><h2>FAQ<span className="dot">.</span></h2></div><FAQ items={service.faq} /></div></section>}

      {service.cta && <section className="service-cta"><div className="container service-cta-inner"><div><span className="eyebrow">Maak contact</span><h2>{service.cta.title}<span className="dot">.</span></h2></div><div><p>{service.cta.body}</p><Link className="pill-button" href={service.cta.buttonHref}>{service.cta.buttonLabel} <span aria-hidden="true">↗</span></Link></div></div></section>}
    </main>
}
