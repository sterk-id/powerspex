import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: { singular: 'Dienst', plural: 'Diensten' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'group', '_status', 'updatedAt'] },
  access: { read: () => true },
  versions: { drafts: true },
  fields: [
    { name: 'title', label: 'Titel', type: 'text', required: true },
    { name: 'slug', label: 'Slug', type: 'text', required: true, unique: true, index: true },
    {
      name: 'group', type: 'select', required: true,
      options: [
        { label: 'Engineering & automatisering', value: 'engineering' },
        { label: 'Realisatie & lifecycle', value: 'realisatie' },
      ],
    },
    { name: 'eyebrow', label: 'Bovenregel', type: 'text' },
    { name: 'summary', label: 'Korte samenvatting', type: 'textarea', required: true },
    { name: 'heroTitle', label: 'Hero-titel', type: 'text' },
    { name: 'heroIntro', label: 'Hero-introductie', type: 'textarea' },
    { name: 'heroImage', label: 'Hero-afbeelding', type: 'upload', relationTo: 'media' },
    {
      name: 'intro', label: 'Introductie', type: 'group', fields: [
        { name: 'title', label: 'Titel', type: 'text' },
        { name: 'body', label: 'Tekst', type: 'textarea' },
        { name: 'image', label: 'Afbeelding', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'capabilities', label: 'Werkzaamheden', type: 'array', fields: [
        { name: 'title', label: 'Titel', type: 'text', required: true },
        { name: 'description', label: 'Omschrijving', type: 'textarea', required: true },
      ],
    },
    { name: 'relatedExpertise', label: 'Gerelateerde expertises', type: 'relationship', relationTo: 'expertise', hasMany: true },
    {
      name: 'standards', label: 'Certificeringen en standaarden', type: 'array', admin: { description: 'Alleen gevalideerde items worden publiek getoond.' }, fields: [
        { name: 'name', label: 'Naam', type: 'text', required: true },
        { name: 'type', label: 'Type', type: 'select', required: true, options: [{ label: 'Certificering', value: 'certification' }, { label: 'Norm', value: 'standard' }, { label: 'Kwaliteitsborging', value: 'quality' }] },
        { name: 'description', label: 'Korte toelichting', type: 'textarea' },
        { name: 'asset', label: 'Logo of document', type: 'upload', relationTo: 'media' },
        { name: 'validated', label: 'Inhoudelijk gevalideerd voor publicatie', type: 'checkbox', defaultValue: false },
      ],
    },
    {
      name: 'process', label: 'Werkwijze', type: 'array', fields: [
        { name: 'number', label: 'Nummer', type: 'text' },
        { name: 'title', label: 'Titel', type: 'text', required: true },
        { name: 'description', label: 'Omschrijving', type: 'textarea', required: true },
      ],
    },
    { name: 'relatedProjects', label: 'Gerelateerde projecten', type: 'relationship', relationTo: 'projects', hasMany: true },
    {
      name: 'faq', label: 'Veelgestelde vragen', type: 'array', fields: [
        { name: 'question', label: 'Vraag', type: 'text', required: true },
        { name: 'answer', label: 'Antwoord', type: 'textarea', required: true },
      ],
    },
    {
      name: 'cta', label: 'Call-to-action', type: 'group', fields: [
        { name: 'title', label: 'Titel', type: 'text' },
        { name: 'body', label: 'Tekst', type: 'textarea' },
        { name: 'buttonLabel', label: 'Knoptekst', type: 'text' },
        { name: 'buttonHref', label: 'Knoplink', type: 'text' },
      ],
    },
    {
      name: 'seo', label: 'SEO', type: 'group', fields: [
        { name: 'metaTitle', label: 'Metatitel', type: 'text' },
        { name: 'metaDescription', label: 'Metabeschrijving', type: 'textarea' },
        { name: 'openGraphImage', label: 'Open Graph-afbeelding', type: 'upload', relationTo: 'media' },
      ],
    },
    { name: 'navigationOrder', label: 'Navigatievolgorde', type: 'number', defaultValue: 0 },
  ],
}
