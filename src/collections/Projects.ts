import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: { singular: 'Project', plural: 'Projecten' },
  admin: { useAsTitle: 'title' },
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
  ],
}
