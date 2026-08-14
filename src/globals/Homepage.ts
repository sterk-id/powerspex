import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  versions: { drafts: true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            { name: 'heroEyebrow', type: 'text', required: true },
            { name: 'heroTitle', type: 'text', required: true },
            { name: 'heroIntro', type: 'textarea', required: true },
            { name: 'heroImage', type: 'upload', relationTo: 'media', required: true },
          ],
        },
        {
          label: 'Intro',
          fields: [
            { name: 'introEyebrow', type: 'text' },
            { name: 'introTitle', type: 'text', required: true },
            { name: 'introBody', type: 'textarea', required: true },
          ],
        },
        {
          label: 'Selecties',
          fields: [
            { name: 'featuredServices', type: 'relationship', relationTo: 'services', hasMany: true, maxRows: 6 },
            { name: 'featuredExpertise', type: 'relationship', relationTo: 'expertise', hasMany: true, maxRows: 4 },
            { name: 'featuredProjects', type: 'relationship', relationTo: 'projects', hasMany: true, maxRows: 3 },
          ],
        },
        {
          label: 'SEO',
          fields: [
            { name: 'metaTitle', type: 'text', maxLength: 70 },
            { name: 'metaDescription', type: 'textarea', maxLength: 170 },
          ],
        },
      ],
    },
  ],
}
