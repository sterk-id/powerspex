import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { Expertise } from './collections/Expertise'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { Services } from './collections/Services'
import { Users } from './collections/Users'
import { Homepage } from './globals/Homepage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const isProduction = process.env.NODE_ENV === 'production'
const payloadSecret = process.env.PAYLOAD_SECRET
const databaseURI = process.env.DATABASE_URI
const databaseMode = process.env.PAYLOAD_DATABASE

if (isProduction && !payloadSecret) {
  throw new Error('PAYLOAD_SECRET is required in production. Set a strong, unique secret before starting or building the application.')
}

if (isProduction && !databaseURI) {
  throw new Error('DATABASE_URI is required in production. Powerspex production runtimes must use PostgreSQL.')
}

if (!databaseURI && databaseMode !== 'sqlite') {
  throw new Error('No Payload database configured. Set DATABASE_URI for PostgreSQL or explicitly set PAYLOAD_DATABASE=sqlite for local development or tests.')
}

const database = databaseURI
  ? postgresAdapter({ pool: { connectionString: databaseURI } })
  : sqliteAdapter({ client: { url: 'file:./powerspex.db' } })

export default buildConfig({
  admin: { user: Users.slug, importMap: { baseDir: path.resolve(dirname) } },
  collections: [Users, Media, Services, Expertise, Projects],
  globals: [Homepage],
  editor: lexicalEditor(),
  secret: payloadSecret || 'local-development-only-secret',
  db: database,
  sharp,
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
})
