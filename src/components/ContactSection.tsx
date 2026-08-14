import Link from 'next/link'
import type { HomepageData } from '@/data/homepage'

export function ContactSection({ contact }: { contact: HomepageData['contact'] }) {
  return (
    <section className="contact-section">
      <div className="container contact-heading"><span className="eyebrow">Maak nu contact</span><h2>Informatie<span className="dot">.</span></h2></div>
      <div className="container contact-layout">
        <div className="contact-copy"><p>{contact.title}</p><p>{contact.body}</p></div>
        <div className="contact-form-preview" aria-label="Contactformulier komt beschikbaar">
          <div className="field-row"><span>Naam</span><span>E-mailadres</span></div>
          <div className="field-line"><span>Bespreek je vraagstuk met ons</span></div>
          <Link className="pill-button" href="/contact">Neem contact op <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  )
}
