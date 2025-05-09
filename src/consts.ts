export const RADIO_TITLE_PLAIN = "Swarm FM";
export const RADIO_TITLE = `♫ The ${RADIO_TITLE_PLAIN} ♫`;

export interface LivestreamAPI {
  rawVideoCode: string
  livestreamUrl: string
  embedUrl: string
  nocookieUrl: string
}

export async function selfQueryYouTubeStream() {
  const res = await fetch("/api/livestream");
  const data: LivestreamAPI = await res.json();
  return data;
}
