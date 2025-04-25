import type { PagesFunction } from "@cloudflare/workers-types";
import { corsHeaders } from ".";

interface Env {
  YT_API_KEY: string;
  API_ENABLED: boolean;
}

interface YouTubeError {
  error: {
    code: number;
    message: string;
    errors: Array<{ message: string; domain: string; reason: string }>;
  };
}

interface YouTubeSearchResponse {
  items: Array<{ id: { videoId: string } }>;
}

const CACHE_TTL_SECONDS: number = 120;

export const onRequest: PagesFunction<Env> = async ({
  env,
  request,
  waitUntil,
}) => {
  // Check if the API is enabled
  if (env.API_ENABLED !== true) {
    return new Response(
      JSON.stringify({
        error: "API is currently disabled",
        status: 503,
        statusText: "Service Unavailable",
        details: "The API has been temporarily disabled by the site administrator. Check back later.",
      }),
      {
        status: 503,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  const apiKey = env.YT_API_KEY;
  const channel = "UC2I6ta1bWX7DnEuYNvHiptQ";

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "YT_API_KEY not set in env" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.search = new URLSearchParams({
    part: "snippet",
    channelId: channel,
    eventType: "live",
    type: "video",
    key: apiKey,
  }).toString();

  const cache = (caches as any).default;
  const cacheKey = new Request(url.toString());
  let response = await cache.match(cacheKey);

  if (!response) {
    const ytFetch = await fetch(url.toString(), {
      cf: { cacheTtl: 600, cacheEverything: true },
    });

    // if YouTube returned an error, grab the JSON body so we can inspect it
    if (!ytFetch.ok) {
      let details: YouTubeError | null = null;
      try {
        details = (await ytFetch.json()) as YouTubeError;
      } catch {}

      return new Response(
        JSON.stringify({
          error: "YouTube API error",
          status: ytFetch.status,
          statusText: ytFetch.statusText,
          details,
        }),
        {
          status: 502,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const data = (await ytFetch.json()) as YouTubeSearchResponse;
    const live = data.items[0];

    const body = JSON.stringify(
      live
        ? {
            rawVideoCode: live.id.videoId,
            livestreamUrl: `https://youtu.be/${live.id.videoId}`,
            embedUrl: `https://youtube.com/embed/${live.id.videoId}`,
            nocookieUrl: `https://youtube-nocookie.com/embed/${live.id.videoId}`,
          }
        : { error: "No live stream found" }
    );

    response = new Response(body, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": `public, max-age=${CACHE_TTL_SECONDS}`,
        ...corsHeaders,
      },
    });
    waitUntil(cache.put(cacheKey, response.clone()));
  }

  return response;
};
