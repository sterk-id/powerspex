import Link from 'next/link'

const groups = [
  {
    title: 'Engineering & automatisering',
    items: [
      ['Project engineering', '/wat-we-doen/project-engineering'],
      ['Procesautomatisering', '/wat-we-doen/procesautomatisering'],
      ['Software engineering', '/wat-we-doen/software-engineering'],
      ['Hardware engineering', '/wat-we-doen/hardware-engineering'],
    ],
  },
  {
    title: 'Realisatie & lifecycle',
    items: [
      ['Productie', '/wat-we-doen/productie'],
      ['Service, onderhoud & inspectie', '/wat-we-doen/service-onderhoud-inspectie'],
    ],
  },
  {
    title: 'Expertises',
    items: [
      ['Cybersecurity & OT-security', '/expertises/cybersecurity-ot-security'],
      ['Functional Safety', '/expertises/functional-safety'],
      ['Explosieveiligheid', '/expertises/explosieveiligheid'],
      ['Simulaties', '/expertises/simulaties'],
    ],
  },
]

export function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="Powerspex home">POWER<span>SPEX</span></Link>
        <nav aria-label="Hoofdnavigatie" className="desktop-nav">
          <div className="mega-wrap">
            <button className="nav-trigger" aria-haspopup="true">Wat we doen <span aria-hidden>⌄</span></button>
            <div className="mega-menu">
              <div className="mega-intro">
                <span className="eyebrow">Wat we doen</span>
                <p>Van engineering en automatisering tot productie, service en specialistische expertise.</p>
                <Link href="/wat-we-doen">Bekijk het totaaloverzicht →</Link>
              </div>
              {groups.map((group) => (
                <div className="mega-group" key={group.title}>
                  <h3>{group.title}</h3>
                  {group.items.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
                </div>
              ))}
            </div>
          </div>
          <Link href="/projecten">Projecten</Link>
          <Link href="/over-powerspex">Over Powerspex</Link>
          <Link href="/nieuws-kennis">Nieuws & kennis</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="career-link" href="https://werkenbijpowerspex.nl">Werken bij ↗</a>
      </div>
    </header>
  )
}
