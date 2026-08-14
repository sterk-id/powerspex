import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" aria-label="Powerspex homepage">
            <Image src="/brand/powerspex-logo-white.png" alt="Powerspex" width={320} height={80} />
          </Link>
          <p>Toonaangevend in industriële automatisering sinds 1997.</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Navigatie</span>
          <Link href="/wat-we-doen">Wat we doen</Link>
          <Link href="/projecten">Projecten</Link>
          <Link href="/over-powerspex">Over Powerspex</Link>
          <Link href="/nieuws-kennis">Nieuws & kennis</Link>
        </div>
        <div className="footer-column">
          <span className="footer-label">Contact</span>
          <Link href="/contact">Neem contact op</Link>
          <Link href="https://werkenbijpowerspex.nl">Werken bij</Link>
        </div>
        <div className="footer-column">
          <span className="footer-label">Volg ons</span>
          <Link href="https://www.linkedin.com/company/powerspex/">LinkedIn</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Powerspex. Alle rechten voorbehouden.</span>
        <div><Link href="/privacy">Privacy Policy</Link><Link href="/contact">Contact</Link></div>
      </div>
    </footer>
  )
}
