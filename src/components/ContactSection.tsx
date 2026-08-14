import Link from 'next/link'
import type { HomepageData } from '@/data/homepage'

export function ContactSection({ contact }: { contact: HomepageData['contact'] }) {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-heading"><span className="eyebrow">Maak nu contact</span><h2>Informatie<span className="dot">.</span></h2></div>
      <div className="container contact-layout">
        <div className="contact-copy"><p>{contact.title}</p><p>{contact.body}</p></div>
        <div className="contact-action">
          <p>Neem rechtstreeks contact op met Powerspex. We reageren zo spoedig mogelijk op je vraag.</p>
          <Link className="pill-button" href="mailto:mail@powerspex.nl">E-mail Powerspex <span aria-hidden="true">↗</span></Link>
          <a className="contact-email" href="mailto:mail@powerspex.nl">mail@powerspex.nl</a>
        </div>
      </div>
    </section>
  )
}
