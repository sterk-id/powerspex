import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: { singular: 'Project', plural: 'Projecten' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'sector', 'year', 'featured', '_status', 'updatedAt'] },
  access: { read: () => true },
  versions: { drafts: true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    {
      name: 'client',
      label: 'Opdrachtgever',
      type: 'text',
      admin: { description: 'Alleen invullen als de opdrachtgever openbaar en inhoudelijk goedgekeurd is.' },
    },
    {
      name: 'clientIsPublic',
      label: 'Opdrachtgever mag openbaar worden getoond',
      type: 'checkbox',
      defaultValue: false,
    },
    { name: 'sector', type: 'text' },
    { name: 'year', type: 'number' },
    { name: 'period', label: 'Periode', type: 'text' },
    { name: 'summary', label: 'Korte omschrijving', type: 'textarea' },
    { name: 'heroEyebrow', label: 'Bovenregel hero', type: 'text' },
    { name: 'heroTitle', label: 'Hero-titel', type: 'text', admin: { description: 'Laat leeg om de projecttitel te gebruiken.' } },
    { name: 'heroIntro', label: 'Hero-introductie', type: 'textarea' },
    { name: 'featuredImage', type: 'upload', relationTo: 'media' },
    { name: 'featured', label: 'Uitlichten op homepage', type: 'checkbox', defaultValue: false },
    {
      name: 'featuredOrder',
      label: 'Volgorde op homepage',
      type: 'number',
      min: 1,
      admin: { condition: (_, siblingData) => Boolean(siblingData?.featured) },
    },
    { name: 'services', type: 'relationship', relationTo: 'services', hasMany: true },
    { name: 'expertise', type: 'relationship', relationTo: 'expertise', hasMany: true },
    {
      name: 'contentSections', label: 'Projectinhoud', type: 'array', fields: [
        { name: 'eyebrow', label: 'Bovenregel', type: 'text' },
        { name: 'title', label: 'Titel', type: 'text', required: true },
        { name: 'body', label: 'Tekst', type: 'textarea', required: true },
        { name: 'image', label: 'Afbeelding', type: 'upload', relationTo: 'media' },
        { name: 'layout', label: 'Beeldpositie', type: 'select', defaultValue: 'right', options: [{ label: 'Beeld rechts', value: 'right' }, { label: 'Beeld links', value: 'left' }] },
        { name: 'theme', label: 'Thema', type: 'select', defaultValue: 'light', options: [{ label: 'Licht', value: 'light' }, { label: 'Mist', value: 'mist' }, { label: 'Donker', value: 'dark' }] },
      ],
    },
    {
      name: 'gallery', label: 'Projectgalerij', type: 'array', fields: [
        { name: 'image', label: 'Afbeelding', type: 'upload', relationTo: 'media', required: true },
        { name: 'caption', label: 'Bijschrift', type: 'text' },
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
  ],
}
