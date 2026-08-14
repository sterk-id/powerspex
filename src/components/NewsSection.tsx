import Link from 'next/link'
import type { HomepageData } from '@/data/homepage'

export function NewsSection({ news }: { news: HomepageData['news'] }) {
  return (
    <section className="news-section" id="nieuws-kennis">
      <div className="container news-heading">
        <div><span className="eyebrow light">Ontdek extra inzichten van ons</span><h2>Laatste nieuws<span className="dot">.</span></h2></div>
        <Link className="pill-button light-pill" href="https://powerspex.nl/nieuws/">Bekijk alles <span aria-hidden="true">↗</span></Link>
      </div>
      {news.length > 0 && <div className="container news-grid">{news.map((item) => <Link href={item.href} key={item.title}><span>{item.meta}</span><h3>{item.title}</h3></Link>)}</div>}
    </section>
  )
}
