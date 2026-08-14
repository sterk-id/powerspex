import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getSiteURL } from '@/lib/siteURL'
import './styles.css'

export const metadata: Metadata = {
  metadataBase: new URL(getSiteURL()),
  title: { default: 'Powerspex | Industriële automatisering', template: '%s | Powerspex' },
  description: 'Powerspex combineert engineering, industriële automatisering, productie, service en specialistische expertise.',
}

export default function FrontendLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nl"><body><a className="skip-link" href="#main-content">Ga naar inhoud</a><Header />{children}<Footer /></body></html>
}
