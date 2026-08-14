import Image from 'next/image'
import Link from 'next/link'
import { ContactSection } from '@/components/ContactSection'
import { NewsSection } from '@/components/NewsSection'
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
        <div className="hero-pattern" />
        <div className="container hero-content">
          <span className="eyebrow light">{data.hero.eyebrow}</span>
          <h1>{data.hero.title}</h1>
          <p>{data.hero.intro}</p>
          <div className="actions"><Link className="pill-button light-pill" href={data.hero.primaryCta.href}>{data.hero.primaryCta.label} <span aria-hidden="true">↗</span></Link><Link className="hero-link" href={data.hero.secondaryCta.href}>{data.hero.secondaryCta.label} <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="people-section" id="over-powerspex">
        <div className="container people-heading"><span className="eyebrow">{data.intro.eyebrow}</span><h2>Gedreven door mensen<span className="dot">.</span></h2></div>
        <div className="container people-layout">
          <div className="people-images">
            <div className="people-image-small"><Visual image={data.intro.primaryImage} sizes="25vw" /></div>
            <div className="people-image-large"><Visual image={data.intro.secondaryImage} sizes="45vw" /></div>
          </div>
          <div className="people-copy">
            <p className="people-lead">{data.intro.body}</p>
            <div className="principle"><span>01.</span><div><h3>Prestatieverbetering</h3><p>Technische disciplines werken samen aan oplossingen die risico’s beheersen en resultaat opleveren.</p></div></div>
            <div className="principle"><span>02.</span><div><h3>Maatwerk in uitvoering</h3><p>Van analyse en engineering tot productie, realisatie en ondersteuning gedurende de lifecycle.</p></div></div>
            <Link className="inline-arrow" href="/over-powerspex">Meer over Powerspex <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="services-section" id="wat-we-doen">
        <div className="container section-intro"><div><span className="eyebrow">Wat we doen</span><h2>Diensten<span className="dot">.</span></h2></div><p>Van ontwerp en automatisering tot productie, service en onderhoud: zes disciplines die afzonderlijk of geïntegreerd worden ingezet.</p></div>
        <div className="container service-grid">{data.services.map((service, index) => <Link className="service-card" href={service.href} key={service.title}><div className="service-image"><Visual image={service.image} sizes="(max-width: 767px) 100vw, 33vw" /></div><div className="service-copy"><span className="card-number">[{String(index + 1).padStart(2, '0')}]</span><h3>{service.title}</h3><p>{service.description}</p><strong>Meer weten <span aria-hidden="true">↗</span></strong></div></Link>)}</div>
      </section>

      <section className="expertise-section">
        <div className="container section-intro"><div><span className="eyebrow">Specialistische kennis</span><h2>Expertises<span className="dot">.</span></h2></div><p>Kennis voor industriële vraagstukken waar een standaardantwoord niet volstaat.</p></div>
        <div className="container expertise-grid">{data.expertise.map((item, index) => <Link key={item.href} href={item.href}><span>[{String(index + 1).padStart(2, '0')}]</span><h3>{item.title}</h3><b aria-hidden="true">↗</b></Link>)}</div>
      </section>

      <section className="impact-section">
        <div className="container impact-heading"><span className="eyebrow">Inzicht in wat prestaties echt drijft</span><div><h2>{data.impact.title}<span className="dot">.</span></h2><p>{data.impact.body}</p></div></div>
        {data.impact.stats.length > 0 && <div className="container stat-grid">{data.impact.stats.map((stat) => <div className="stat" key={stat.label}><span>{stat.label}</span><strong>{stat.value}</strong></div>)}</div>}
      </section>

      <section className="projects-section" id="projecten">
        <div className="container section-intro"><div><span className="eyebrow">Onze technische expertise laten zien</span><h2>Projecten<span className="dot">.</span></h2></div><p>Werk waarin innovatieve engineering en praktische uitvoering samenkomen.</p></div>
        <div className="container project-list">{data.projects.map((project, index) => <Link className="project-card" key={project.title} href={project.href}><div className="project-image"><Visual image={project.image} sizes="(max-width: 767px) 100vw, 38vw" /></div><div className="project-copy"><span>{project.meta}</span><div><b>[{String(index + 1).padStart(2, '0')}]</b><h3>{project.title}</h3></div></div></Link>)}</div>
        <div className="container projects-action"><Link className="pill-button" href="/projecten">Bekijk alle projecten <span aria-hidden="true">↗</span></Link></div>
      </section>

      <NewsSection news={data.news} />
      <ContactSection contact={data.contact} />
    </main>
  )
}
