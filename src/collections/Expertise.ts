import type { CollectionConfig } from 'payload'

export const Expertise: CollectionConfig = {
  slug: 'expertise',
  labels: { singular: 'Expertise', plural: 'Expertises' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'navigationOrder', 'updatedAt'] },
  access: { read: () => true },
  versions: { drafts: true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'summary', type: 'textarea', required: true },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'relatedServices', type: 'relationship', relationTo: 'services', hasMany: true },
    { name: 'navigationOrder', type: 'number', defaultValue: 0 },
  ],
}
