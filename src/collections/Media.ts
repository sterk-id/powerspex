import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Afbeelding', plural: 'Media' },
  admin: { useAsTitle: 'alt' },
  access: { read: () => true },
  upload: {
    staticDir: 'public/media',
    imageSizes: [
      { name: 'card', width: 800, height: 560, position: 'centre' },
      { name: 'hero', width: 1920, height: 1080, position: 'centre' },
    ],
    mimeTypes: ['image/*'],
  },
  fields: [{ name: 'alt', label: 'Alternatieve tekst', type: 'text', required: true }],
}
