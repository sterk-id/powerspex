export type ProjectMediaSource = {
  assetPath: string
  filename: string
  sha256: string
  alt: string
}

export type ProjectContentMigration = {
  slug: string
  sourceURL: string
  media?: ProjectMediaSource
  serviceSlugs: string[]
  expertiseSlugs: string[]
  data: Record<string, unknown>
}
