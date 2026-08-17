import { getPayload } from 'payload'
import config from '../src/payload.config'
import { runProjectContentMigrations } from '../src/content-migrations/runProjectContentMigrations'

const payload = await getPayload({ config })
const results = await runProjectContentMigrations(payload)

console.log(JSON.stringify(results, null, 2))
await payload.destroy()
