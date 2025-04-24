import type { PagesFunction } from '@cloudflare/workers-types'

interface Env {
  YT_API_KEY: string
}

interface YouTubeError {
  error: {
    code: number
    message: string
    errors: Array<{ message: string; domain: string; reason: string }>
  }
}

interface YouTubeSearchResponse {
  items: Array<{ id: { videoId: string } }>
}

const CACHE_TTL_SECONDS: number = 600

export const onRequest: PagesFunction<Env> = async ({ env, request, waitUntil }) => {
  const apiKey   = env.YT_API_KEY
  const channel  = 'UC2I6ta1bWX7DnEuYNvHiptQ'

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'YT_API_KEY not set in env' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }

  const url = new URL('https://www.googleapis.com/youtube/v3/search')
  url.search = new URLSearchParams({
    part:       'snippet',
    channelId:  channel,
    eventType:  'live',
    type:       'video',
    key:        apiKey,
  }).toString()

  const cache    = (caches as any).default
  const cacheKey = new Request(url.toString())
  let response   = await cache.match(cacheKey)

  if (!response) {
    const ytFetch = await fetch(url.toString(), {
      cf: { cacheTtl: 60, cacheEverything: true }
    })

    // if YouTube returned an error, grab the JSON body so we can inspect it
    if (!ytFetch.ok) {
      let details: YouTubeError | null = null
      try {
        details = (await ytFetch.json()) as YouTubeError
      } catch {}

      return new Response(
        JSON.stringify({
          error:       'YouTube API error',
          status:      ytFetch.status,
          statusText:  ytFetch.statusText,
          details,
        }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const data = (await ytFetch.json()) as YouTubeSearchResponse
    const live = data.items[0]

    const body = JSON.stringify(
      live
        ? { 
            rawVideoCode: live.id.videoId,
            livestreamUrl: `https://youtu.be/${live.id.videoId}`,
            embedUrl: `https://youtube.com/embed/${live.id.videoId}`,
            nocookieUrl: `https://youtube-nocookie.com/embed/${live.id.videoId}`
          }
        : { message: 'No live stream found' }
    )

    response = new Response(body, {
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': `public, max-age=${CACHE_TTL_SECONDS}`
      }
    })
    waitUntil(cache.put(cacheKey, response.clone()))
  }

  return response
}
