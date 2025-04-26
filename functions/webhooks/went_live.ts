/// <reference lib="webworker" />
/// <reference types="@cloudflare/workers-types" />

import type { PagesFunction } from '@cloudflare/workers-types'
import { XMLParser } from 'fast-xml-parser'

export interface Env {
  LIVE_DO: DurableObjectNamespace
}

// @ts-ignore
export const onRequest: PagesFunction<Env> = async ({ request, env, waitUntil }) => {
  if (request.method === 'GET') {
    // …your handshake logic…
  }

  if (request.method === 'POST') {
    const xml    = await request.text()
    const parser = new XMLParser({ ignoreAttributes: false })
    const obj    = parser.parse(xml) as any

    // Atom feed → obj.feed.entry → .['yt:videoId']
    const entry   = Array.isArray(obj.feed.entry) ? obj.feed.entry[0] : obj.feed.entry
    const videoId = entry?.['yt:videoId']

    if (videoId) {
      const id   = env.LIVE_DO.idFromName('liveStatus')
      const stub = env.LIVE_DO.get(id)
      waitUntil(
        stub.fetch('https://worker.update/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ videoId })
        })
      )
    }

    return new Response(null, { status: 204 })
  }

  return new Response('Method Not Allowed', { status: 405 })
}
