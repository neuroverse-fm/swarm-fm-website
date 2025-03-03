import { Layout } from "../../layouts/Layout";
import { RADIO_TITLE, RADIO_TITLE_PLAIN } from "../../consts";
import { StyledLink } from "../../components/StyledLink";

const instructions: string[] = [
  "Open OBS Studio.",
  "Click on the '+' button under the 'Sources' panel.",
  "Select 'Browser' from the list of source types.",
  "Enter a name for your new source and click 'OK'.",
  `In the 'URL' field, paste the URL of the overlay you want to use from ${RADIO_TITLE_PLAIN}.`,
  "Adjust the width and height to match your stream layout.",
  "Click 'OK' to add the overlay to your scene.",
  "Repeat these steps for any additional overlays you want to add.",
];

export function OverlayInstructions() {
  return (
    <Layout title="How to embed overlays">
      <h1 class="text-3xl font-bold mt-4">
        How to embed {RADIO_TITLE} into your streams
      </h1>
      <p class="mt-4">
        This guide assumes you are using OBS, but it should be pretty similar if
        you aren't.
      </p>
      <ol class="list-decimal list-inside mt-4 space-y-2">
        {instructions.map((instruction: string, index: number) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <div class="mt-4">
        Now that you know how to add our overlays,{" "}
        <StyledLink href="/overlays">why not take a look at them?</StyledLink>
      </div>
    </Layout>
  );
}
