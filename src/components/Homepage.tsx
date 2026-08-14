import Image from 'next/image'
import Link from 'next/link'
import type { HomepageData, ImageData } from '@/data/homepage'

function Visual({ image, priority = false, sizes }: { image: ImageData; priority?: boolean; sizes: string }) {
  if (!image.src) return <div className="image-fallback" role="img" aria-label={image.alt}><span aria-hidden="true">PSX</span></div>
  return <Image src={image.src} alt={image.alt} fill priority={priority} sizes={sizes} />
}

export function Homepage({ data }: { data: HomepageData }) {
  return (
    <main>
      <section className="hero">
        <Visual image={data.hero.image} priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="eyebrow light">{data.hero.eyebrow}</span>
          <h1>{data.hero.title}</h1>
          <p>{data.hero.intro}</p>
          <div className="actions">
            <Link className="button light" href={data.hero.primaryCta.href}>{data.hero.primaryCta.label}</Link>
            <Link className="text-link light" href={data.hero.secondaryCta.href}>{data.hero.secondaryCta.label} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container split"><div><span className="eyebrow">{data.intro.eyebrow}</span><h2>{data.intro.title}</h2></div><div className="lead"><p>{data.intro.body}</p><Link className="text-link" href="/over-powerspex">Meer over Powerspex <span aria-hidden="true">→</span></Link></div></div>
      </section>

      <section className="section services" id="wat-we-doen">
        <div className="container section-heading"><span className="eyebrow">Diensten</span><h2>Van ontwerp tot beheer.</h2><p>Powerspex combineert disciplines die afzonderlijk of als geïntegreerd project kunnen worden ingezet.</p></div>
        <div className="container service-grid">{data.services.map((service, index) => <Link className="service-card" href={service.href} key={service.title}><div className="service-image"><Visual image={service.image} sizes="(max-width: 767px) 100vw, 33vw" /></div><div className="service-copy"><span>{String(index + 1).padStart(2, '0')}</span><h3>{service.title}</h3><p>{service.description}</p><strong>Meer weten <span aria-hidden="true">→</span></strong></div></Link>)}</div>
      </section>

      <section className="expertise-section">
        <div className="container expertise-layout"><div><span className="eyebrow light">Specialistische expertise</span><h2>Kennis voor de vraagstukken waar geen standaardantwoord volstaat.</h2></div><div className="expertise-list">{data.expertise.map((item, index) => <Link key={item.href} href={item.href}><span>{String(index + 1).padStart(2, '0')}</span>{item.title}<b aria-hidden="true">↗</b></Link>)}</div></div>
      </section>

      <section className="section impact">
        <div className="container split"><div><span className="eyebrow">{data.impact.eyebrow}</span><h2>{data.impact.title}</h2></div><p className="lead">{data.impact.body}</p></div>
        {data.impact.stats.length > 0 && <div className="container stat-grid">{data.impact.stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>}
      </section>

      <section className="section projects" id="projecten">
        <div className="container section-heading row"><div><span className="eyebrow">Bewijs uit de praktijk</span><h2>Projecten.</h2></div><Link className="text-link" href="/projecten">Bekijk alle projecten <span aria-hidden="true">→</span></Link></div>
        {data.projects.length ? <div className="container project-grid">{data.projects.map((project) => <Link className="project-card" key={project.title} href={project.href}><div className="project-image"><Visual image={project.image} sizes="(max-width: 767px) 100vw, 34vw" /></div><span>{project.meta}</span><h3>{project.title}</h3></Link>)}</div> : <div className="container empty-projects"><p>Nieuwe projectverhalen worden na inhoudelijke goedkeuring gepubliceerd.</p></div>}
      </section>

      <section className="contact-cta"><div className="container split"><div><span className="eyebrow light">Maak contact</span><h2>{data.contact.title}</h2></div><div><p>{data.contact.body}</p><Link className="button light" href="/contact">Neem contact op</Link></div></div></section>
    </main>
  )
}
