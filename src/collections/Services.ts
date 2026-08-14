import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: { singular: 'Dienst', plural: 'Diensten' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'group', 'updatedAt'] },
  versions: { drafts: true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    {
      name: 'group', type: 'select', required: true,
      options: [
        { label: 'Engineering & automatisering', value: 'engineering' },
        { label: 'Realisatie & lifecycle', value: 'realisatie' },
      ],
    },
    { name: 'summary', type: 'textarea', required: true },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'relatedExpertise', type: 'relationship', relationTo: 'expertise', hasMany: true },
    { name: 'navigationOrder', type: 'number', defaultValue: 0 },
  ],
}
