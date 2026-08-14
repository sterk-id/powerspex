'use client'

import { useState } from 'react'

export type FAQItem = { question: string; answer: string }

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return <div className="faq-list">{items.map((item, index) => {
    const isOpen = openIndex === index
    const panelId = `faq-panel-${index}`
    return <div className="faq-item" key={item.question}>
      <button className="faq-trigger" type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? null : index)}>
        <span>[{String(index + 1).padStart(2, '0')}]</span><strong>{item.question}</strong><i aria-hidden="true">+</i>
      </button>
      <div id={panelId} hidden={!isOpen}><p>{item.answer}</p></div>
    </div>
  })}</div>
}
