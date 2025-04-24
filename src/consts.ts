export const RADIO_TITLE_PLAIN = "Swarm FM";
export const RADIO_TITLE = `♫ The ${RADIO_TITLE_PLAIN} ♫`;

export async function selfQueryYouTubeStream() {
    const res = await fetch('/api/livestream');
    const data = await res.json()
    console.log(data)
    return (data as any).embedUrl
}

export const YOUTUBE_STREAM = selfQueryYouTubeStream();
