import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: { singular: 'Project', plural: 'Projecten' },
  admin: { useAsTitle: 'title' },
  versions: { drafts: true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'client', type: 'text' },
    { name: 'sector', type: 'text' },
    { name: 'year', type: 'number' },
    { name: 'featuredImage', type: 'upload', relationTo: 'media' },
    { name: 'services', type: 'relationship', relationTo: 'services', hasMany: true },
    { name: 'expertise', type: 'relationship', relationTo: 'expertise', hasMany: true },
  ],
}
