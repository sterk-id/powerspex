import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  labels: { singular: 'Nieuwsitem', plural: 'Nieuws & kennis' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'publishedAt', 'featured', 'updatedAt'] },
  access: { read: () => true },
  versions: { drafts: true },
  fields: [
    { name: 'title', label: 'Titel', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'publishedAt', label: 'Publicatiedatum', type: 'date', required: true },
    { name: 'excerpt', label: 'Korte omschrijving', type: 'textarea' },
    { name: 'featuredImage', label: 'Uitgelichte afbeelding', type: 'upload', relationTo: 'media' },
    { name: 'featured', label: 'Uitlichten op homepage', type: 'checkbox', defaultValue: false },
    {
      name: 'featuredOrder',
      label: 'Volgorde op homepage',
      type: 'number',
      min: 1,
      admin: { condition: (_, siblingData) => Boolean(siblingData?.featured) },
    },
  ],
}
