const LOCAL_ORIGIN = 'http://localhost:3000'

export function getSiteURL(): string {
  const configuredOrigin = process.env.NEXT_PUBLIC_SERVER_URL

  if (!configuredOrigin) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('NEXT_PUBLIC_SERVER_URL is required in production to generate canonical and Open Graph URLs.')
    }
    return LOCAL_ORIGIN
  }

  try {
    const url = new URL(configuredOrigin)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      throw new Error('unsupported protocol')
    }
    return url.origin
  } catch {
    throw new Error('NEXT_PUBLIC_SERVER_URL must be a valid absolute http(s) URL.')
  }
}
