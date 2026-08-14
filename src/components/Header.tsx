'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const groups = [
  { title: 'Engineering & automatisering', items: [['Project engineering', '/wat-we-doen/project-engineering'], ['Procesautomatisering', '/wat-we-doen/procesautomatisering'], ['Software engineering', '/wat-we-doen/software-engineering'], ['Hardware engineering', '/wat-we-doen/hardware-engineering']] },
  { title: 'Realisatie & lifecycle', items: [['Productie', '/wat-we-doen/productie'], ['Service, onderhoud & inspectie', '/wat-we-doen/service-onderhoud-inspectie']] },
  { title: 'Expertises', items: [['Cybersecurity & OT-security', '/expertises/cybersecurity-ot-security'], ['Functional Safety', '/expertises/functional-safety'], ['Explosieveiligheid', '/expertises/explosieveiligheid'], ['Simulaties', '/expertises/simulaties']] },
] as const

const links = [['Projecten', '/projecten'], ['Over Powerspex', '/over-powerspex'], ['Nieuws & kennis', '/nieuws-kennis'], ['Contact', '/contact']] as const

export function Header() {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const megaRef = useRef<HTMLDivElement>(null)
  const mobileButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setMegaOpen(false)
      if (mobileOpen) {
        setMobileOpen(false)
        mobileButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [mobileOpen])

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!megaRef.current?.contains(event.target as Node)) setMegaOpen(false)
    }
    document.addEventListener('pointerdown', closeOutside)
    return () => document.removeEventListener('pointerdown', closeOutside)
  }, [])

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="Powerspex homepage"><Image src="/brand/powerspex-logo-white.png" alt="Powerspex" width={300} height={75} priority /></Link>

        <nav aria-label="Hoofdnavigatie" className="desktop-nav">
          <div className="mega-wrap" ref={megaRef}>
            <button className="nav-trigger" type="button" aria-expanded={megaOpen} aria-controls="mega-menu" onClick={() => setMegaOpen((open) => !open)}>
              Wat we doen <span aria-hidden="true">⌄</span>
            </button>
            <div className="mega-menu" id="mega-menu" hidden={!megaOpen}>
              <div className="mega-intro">
                <span className="eyebrow">Wat we doen</span>
                <p>Van engineering en automatisering tot productie, service en specialistische expertise.</p>
                <Link href="/wat-we-doen" onClick={() => setMegaOpen(false)}>Bekijk het totaaloverzicht <span aria-hidden="true">→</span></Link>
              </div>
              {groups.map((group) => <div className="mega-group" key={group.title}><h2>{group.title}</h2>{group.items.map(([label, href]) => <Link key={href} href={href} onClick={() => setMegaOpen(false)}>{label}</Link>)}</div>)}
            </div>
          </div>
          {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>

        <Link className="career-link" href="https://werkenbijpowerspex.nl">Werken bij <span aria-hidden="true">↗</span></Link>
        <button ref={mobileButtonRef} className="menu-toggle" type="button" aria-expanded={mobileOpen} aria-controls="mobile-menu" onClick={() => setMobileOpen((open) => !open)}>
          <span>{mobileOpen ? 'Sluiten' : 'Menu'}</span><i aria-hidden="true" />
        </button>
      </div>

      <nav className="mobile-nav" id="mobile-menu" aria-label="Mobiele navigatie" hidden={!mobileOpen}>
        <button type="button" aria-expanded={mobileServicesOpen} aria-controls="mobile-services" onClick={() => setMobileServicesOpen((open) => !open)}>Wat we doen <span aria-hidden="true">+</span></button>
        <div className="mobile-services" id="mobile-services" hidden={!mobileServicesOpen}>
          {groups.map((group) => <div key={group.title}><h2>{group.title}</h2>{group.items.map(([label, href]) => <Link key={href} href={href} onClick={() => setMobileOpen(false)}>{label}</Link>)}</div>)}
        </div>
        {links.map(([label, href]) => <Link href={href} key={href} onClick={() => setMobileOpen(false)}>{label}</Link>)}
        <Link className="mobile-career" href="https://werkenbijpowerspex.nl">Werken bij <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  )
}
