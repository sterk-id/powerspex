import type { CollectionConfig } from 'payload'

export const Expertise: CollectionConfig = {
  slug: 'expertise',
  labels: { singular: 'Expertise', plural: 'Expertises' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'navigationOrder', 'updatedAt'] },
  access: { read: () => true },
  versions: { drafts: true },
  fields: [
    { name: 'title', label: 'Titel', type: 'text', required: true },
    { name: 'slug', label: 'Slug', type: 'text', required: true, unique: true, index: true },
    { name: 'summary', label: 'Korte samenvatting', type: 'textarea', required: true },
    { name: 'eyebrow', label: 'Bovenregel', type: 'text' },
    { name: 'heroTitle', label: 'Hero-titel', type: 'text' },
    { name: 'heroIntro', label: 'Hero-introductie', type: 'textarea' },
    { name: 'heroImage', label: 'Hero-afbeelding', type: 'upload', relationTo: 'media' },
    { name: 'topicsEyebrow', label: 'Bovenregel expertisegebieden', type: 'text' },
    { name: 'topicsTitle', label: 'Titel expertisegebieden', type: 'text' },
    { name: 'intro', label: 'Introductie', type: 'group', fields: [{ name: 'title', label: 'Titel', type: 'text' }, { name: 'body', label: 'Tekst', type: 'textarea' }, { name: 'image', label: 'Afbeelding', type: 'upload', relationTo: 'media' }] },
    { name: 'topics', label: 'Expertisegebieden', type: 'array', fields: [{ name: 'title', label: 'Titel', type: 'text', required: true }, { name: 'description', label: 'Omschrijving', type: 'textarea', required: true }] },
    { name: 'contentSections', label: 'Verdiepende contentsecties', type: 'array', fields: [
      { name: 'eyebrow', label: 'Bovenregel', type: 'text' }, { name: 'title', label: 'Titel', type: 'text', required: true }, { name: 'body', label: 'Tekst', type: 'textarea', required: true }, { name: 'image', label: 'Afbeelding', type: 'upload', relationTo: 'media' },
      { name: 'layout', label: 'Beeldpositie', type: 'select', defaultValue: 'right', options: [{ label: 'Beeld rechts', value: 'right' }, { label: 'Beeld links', value: 'left' }] }, { name: 'theme', label: 'Thema', type: 'select', defaultValue: 'light', options: [{ label: 'Licht', value: 'light' }, { label: 'Mist', value: 'mist' }, { label: 'Donker', value: 'dark' }] },
    ] },
    { name: 'relatedServices', label: 'Gerelateerde diensten', type: 'relationship', relationTo: 'services', hasMany: true },
    { name: 'standards', label: 'Certificeringen en standaarden', type: 'array', admin: { description: 'Alleen exact gevalideerde items worden publiek getoond. Een toegepaste norm is geen certificering.' }, fields: [
      { name: 'name', label: 'Exacte naam', type: 'text', required: true }, { name: 'type', label: 'Type', type: 'select', required: true, options: [{ label: 'Norm / standaard', value: 'standard' }, { label: 'Certificering', value: 'certification' }, { label: 'Opleiding / persoonscertificering', value: 'personal-certification' }, { label: 'Bedrijfs- of procescertificering', value: 'organisation-certification' }] }, { name: 'description', label: 'Scope en toelichting', type: 'textarea' }, { name: 'validated', label: 'Inhoudelijk gevalideerd voor publicatie', type: 'checkbox', defaultValue: false },
    ] },
    { name: 'process', label: 'Werkwijze', type: 'array', fields: [{ name: 'number', label: 'Nummer', type: 'text' }, { name: 'title', label: 'Titel', type: 'text', required: true }, { name: 'description', label: 'Omschrijving', type: 'textarea', required: true }] },
    { name: 'relatedProjects', label: 'Gerelateerde projecten', type: 'relationship', relationTo: 'projects', hasMany: true },
    { name: 'faq', label: 'Veelgestelde vragen', type: 'array', fields: [{ name: 'question', label: 'Vraag', type: 'text', required: true }, { name: 'answer', label: 'Antwoord', type: 'textarea', required: true }] },
    { name: 'cta', label: 'Call-to-action', type: 'group', fields: [{ name: 'title', label: 'Titel', type: 'text' }, { name: 'body', label: 'Tekst', type: 'textarea' }, { name: 'buttonLabel', label: 'Knoptekst', type: 'text' }, { name: 'buttonHref', label: 'Knoplink', type: 'text' }] },
    { name: 'seo', label: 'SEO', type: 'group', fields: [{ name: 'metaTitle', label: 'Metatitel', type: 'text' }, { name: 'metaDescription', label: 'Metabeschrijving', type: 'textarea' }, { name: 'openGraphImage', label: 'Open Graph-afbeelding', type: 'upload', relationTo: 'media' }] },
    { name: 'navigationOrder', label: 'Navigatievolgorde', type: 'number', defaultValue: 0 },
  ],
}
