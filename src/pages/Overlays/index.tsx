import { Layout } from "../../layouts/Layout";
import { RADIO_TITLE_PLAIN } from "../../consts";
import { StyledLink } from "../../components/StyledLink";

const overlays: OverlayDisplayProps[] = [
  {
    name: "Song overlay (top)",
    url: "https://swarmfm.boopdev.com/player/details-overlay?position=top",
  },
];

interface OverlayDisplayProps {
    name: string;
    url: string;
}

export function Overlays() {
  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url).then(
      () => {
        console.log("URL copied to clipboard");
      },
      (err) => {
        console.error("Failed to copy: ", err);
      },
    );
  };

  return (
    <Layout title="Overlays">
      <h1 class="text-3xl font-bold mt-4">Overlays for {RADIO_TITLE_PLAIN}</h1>
      <p class="mt-4">
        Feel free to use these overlays in your streams if you are playing{" "}
        {RADIO_TITLE_PLAIN}!
      </p>
      <p class="mt-4">
        Need help setting up?{" "}
        <StyledLink href="/overlays/instructions">Click here!</StyledLink>
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 justify-center items-center">
        {overlays.map((overlay: OverlayDisplayProps) => (
          <div class="border rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={overlay.url}
              title={overlay.name}
              class="w-full h-64"
              frameBorder="0"
            ></iframe>
            <div class="p-4">
              <h2 class="text-xl font-bold">{overlay.name}</h2>
              <div class="mt-2 flex space-x-2 justify-center">
                <a
                  href={overlay.url}
                  class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in New Tab
                </a>
                <button
                  onClick={() => copyToClipboard(overlay.url)}
                  class="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                >
                  Copy URL
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
