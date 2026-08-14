import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'Gebruiker', plural: 'Gebruikers' },
  auth: true,
  admin: { useAsTitle: 'email' },
  access: { read: ({ req }) => Boolean(req.user) },
  fields: [{ name: 'name', label: 'Naam', type: 'text' }],
}
