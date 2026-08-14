import type { GlobalConfig } from 'payload'

const linkFields = [
  { name: 'label', label: 'Label', type: 'text' as const, required: true },
  { name: 'href', label: 'Link', type: 'text' as const, required: true },
]

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  access: { read: () => true },
  versions: { drafts: true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            { name: 'heroEyebrow', label: 'Bovenregel', type: 'text', required: true },
            { name: 'heroTitle', label: 'Titel', type: 'text', required: true },
            { name: 'heroIntro', label: 'Introductie', type: 'textarea', required: true },
            { name: 'heroImage', label: 'Afbeelding', type: 'upload', relationTo: 'media' },
            { name: 'primaryCta', label: 'Primaire actie', type: 'group', fields: linkFields },
            { name: 'secondaryCta', label: 'Secundaire actie', type: 'group', fields: linkFields },
          ],
        },
        {
          label: 'Intro',
          fields: [
            { name: 'introEyebrow', label: 'Bovenregel', type: 'text' },
            { name: 'introTitle', label: 'Titel', type: 'text', required: true },
            { name: 'introBody', label: 'Tekst', type: 'textarea', required: true },
          ],
        },
        {
          label: 'Selecties',
          fields: [
            { name: 'featuredServices', label: 'Uitgelichte diensten', type: 'relationship', relationTo: 'services', hasMany: true, maxRows: 6 },
            { name: 'featuredExpertise', label: 'Uitgelichte expertises', type: 'relationship', relationTo: 'expertise', hasMany: true, maxRows: 4 },
            { name: 'featuredProjects', label: 'Uitgelichte projecten', type: 'relationship', relationTo: 'projects', hasMany: true, maxRows: 3 },
          ],
        },
        {
          label: 'Onderbouw & contact',
          fields: [
            { name: 'impactEyebrow', label: 'Bovenregel', type: 'text' },
            { name: 'impactTitle', label: 'Titel', type: 'text' },
            { name: 'impactBody', label: 'Tekst', type: 'textarea' },
            {
              name: 'stats', label: 'Gevalideerde cijfers', type: 'array', maxRows: 4,
              admin: { description: 'Publiceer alleen cijfers die inhoudelijk zijn goedgekeurd.' },
              fields: [{ name: 'value', label: 'Waarde', type: 'text', required: true }, { name: 'label', label: 'Toelichting', type: 'text', required: true }],
            },
            { name: 'contactTitle', label: 'Contacttitel', type: 'text' },
            { name: 'contactBody', label: 'Contacttekst', type: 'textarea' },
          ],
        },
        {
          label: 'SEO',
          fields: [
            { name: 'metaTitle', label: 'Metatitel', type: 'text', maxLength: 70 },
            { name: 'metaDescription', label: 'Metaomschrijving', type: 'textarea', maxLength: 170 },
          ],
        },
      ],
    },
  ],
}
