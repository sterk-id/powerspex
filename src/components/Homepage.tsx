import Image from 'next/image'
import Link from 'next/link'
import { homepage } from '@/data/homepage'

export function Homepage() {
  return (
    <main>
      <section className="hero">
        <Image src={homepage.hero.image} alt="Powerspex specialist in een industriële installatie" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="eyebrow light">{homepage.hero.eyebrow}</span>
          <h1>{homepage.hero.title}</h1>
          <p>{homepage.hero.intro}</p>
          <div className="actions">
            <Link className="button light" href={homepage.hero.primaryCta.href}>{homepage.hero.primaryCta.label}</Link>
            <Link className="text-link light" href={homepage.hero.secondaryCta.href}>{homepage.hero.secondaryCta.label} →</Link>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container split">
          <div><span className="eyebrow">{homepage.intro.eyebrow}</span><h2>{homepage.intro.title}</h2></div>
          <div className="lead"><p>{homepage.intro.body}</p><Link className="text-link" href="/over-powerspex">Meer over Powerspex →</Link></div>
        </div>
      </section>

      <section className="section services" id="wat-we-doen">
        <div className="container section-heading">
          <span className="eyebrow">Diensten</span>
          <h2>Van ontwerp tot beheer.</h2>
          <p>Powerspex combineert disciplines die afzonderlijk of als geïntegreerd project kunnen worden ingezet.</p>
        </div>
        <div className="container service-grid">
          {homepage.services.map((service, index) => (
            <Link className="service-card" href={service.href} key={service.title}>
              <div className="service-image"><Image src={service.image} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" /></div>
              <div className="service-copy"><span>{String(index + 1).padStart(2, '0')}</span><h3>{service.title}</h3><p>{service.description}</p><strong>Meer weten →</strong></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="expertise-section">
        <div className="container expertise-layout">
          <div><span className="eyebrow light">Specialistische expertise</span><h2>Kennis voor de vraagstukken waar geen standaardantwoord volstaat.</h2></div>
          <div className="expertise-list">
            {homepage.expertise.map((item, index) => <Link key={item.href} href={item.href}><span>0{index + 1}</span>{item.title}<b>↗</b></Link>)}
          </div>
        </div>
      </section>

      <section className="section impact">
        <div className="container split">
          <div><span className="eyebrow">{homepage.impact.eyebrow}</span><h2>{homepage.impact.title}</h2></div>
          <p className="lead">{homepage.impact.body}</p>
        </div>
        <div className="container stat-grid">{homepage.impact.stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
      </section>

      <section className="section projects" id="projecten">
        <div className="container section-heading row"><div><span className="eyebrow">Bewijs uit de praktijk</span><h2>Projecten.</h2></div><Link className="text-link" href="/projecten">Bekijk alle projecten →</Link></div>
        <div className="container project-grid">{homepage.projects.map((project) => <Link className="project-card" key={project.title} href={project.href}><div className="project-image"><Image src={project.image} alt="" fill sizes="(max-width: 800px) 100vw, 34vw" /></div><span>{project.meta}</span><h3>{project.title}</h3></Link>)}</div>
      </section>

      <section className="contact-cta"><div className="container split"><div><span className="eyebrow light">Maak contact</span><h2>Een technisch vraagstuk dat om overzicht én diepgang vraagt?</h2></div><div><p>Bespreek de uitdaging met Powerspex. We kijken eerst wat er technisch en organisatorisch echt nodig is.</p><Link className="button light" href="/contact">Neem contact op</Link></div></div></section>
    </main>
  )
}
