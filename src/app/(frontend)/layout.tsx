import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import './styles.css'

const origin = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: { default: 'Powerspex | Industriële automatisering', template: '%s | Powerspex' },
  description: 'Powerspex combineert engineering, industriële automatisering, productie, service en specialistische expertise.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'nl_NL', siteName: 'Powerspex', title: 'Powerspex | Industriële automatisering', description: 'Engineering, industriële automatisering, productie, service en specialistische expertise.', url: '/' },
}

export default function FrontendLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nl"><body><a className="skip-link" href="#main-content">Ga naar inhoud</a><Header />{children}</body></html>
}
