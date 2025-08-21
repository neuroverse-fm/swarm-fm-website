import { useState } from "preact/hooks";
import useRadio from "../utils/RadioContext";
import { selfQueryYouTubeStream } from "../consts";

export function RadioPlayer() {
  const { streamUrl, setStreamUrl } = useRadio();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  if (!streamUrl) {
    return <div class="text-center">Loading... Try refreshing if this stays, or use <a href="https://player.sw.arm.fm/" class="text-blue-500 hover:text-blue-400 underline">the community player</a> instead.</div>; // Show a loading state while the stream URL is being fetched
  }

  const reloadStream = async () => {
    setStreamUrl(""); // Temporarily clear the URL to force a reload
    setTimeout(async () => {
      const data = await selfQueryYouTubeStream();
      setStreamUrl(data.embedUrl);
    }, 100);
  };

  const toggleExpand = () => {
    if (window.innerWidth <= 768) {
      const youtubePageUrl: string = streamUrl.replace("/embed/", "/watch?v=");
      window.open(youtubePageUrl, "_blank");
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  const playerSize = isExpanded ? "w-216 h-147" : "w-96 h-57";

  return (
    <div
      class={`fixed bottom-4 right-4 bg-white shadow-lg p-4 rounded-lg ${playerSize} flex flex-col`}
    >
      <iframe
        class="flex-grow"
        width="100%"
        src={streamUrl}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div class="mt-2 flex space-x-2">
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer w-full"
          onClick={reloadStream}
        >
          Reload
        </button>
        <button
          class="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer w-full"
          onClick={toggleExpand}
        >
          {isExpanded ? "Shrink" : "Expand"}
        </button>
      </div>
    </div>
  );
}

export default RadioPlayer;
