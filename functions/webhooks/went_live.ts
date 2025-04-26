import { PagesFunction } from '@cloudflare/workers-types'

export interface Env {
  LIVE_DO: DurableObjectNamespace
}

// @ts-ignore
export const onRequest: PagesFunction<Env> = async ({ request, env, waitUntil }) => {
  const url = new URL(request.url)

  // 1) PubSubHubbub handshake verification
  if (request.method === 'GET') {
    const mode      = url.searchParams.get('hub.mode')
    const topic     = url.searchParams.get('hub.topic')
    const challenge = url.searchParams.get('hub.challenge')

    const expectedTopic = 'https://www.youtube.com/xml/feeds/videos.xml?channel_id=UC2I6ta1bWX7DnEuYNvHiptQ'

    if (mode === 'subscribe' && topic === expectedTopic && challenge) {
      return new Response(challenge, { status: 200 })
    }

    return new Response('Invalid subscription request', { status: 400 })
  }

  // 2) Receive notification
  if (request.method === 'POST') {
    const xml     = await request.text()
    const doc     = new DOMParser().parseFromString(xml, 'application/xml')
    const videoId = doc.querySelector('entry > yt\\:videoId')?.textContent

    if (videoId) {
      const doId = env.LIVE_DO.idFromName('liveStatus')
      const stub = env.LIVE_DO.get(doId)
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
