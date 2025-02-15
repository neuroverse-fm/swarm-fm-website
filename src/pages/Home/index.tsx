import { Layout } from "../../layouts/Layout";
import { RADIO_TITLE } from "../../consts";

export function Home() {
  return (
    <Layout title="Home">
      <div class="flex justify-center mt-4">
        <img src="/wide-tutel.png" class="max-h-48" />
      </div>
      <h1 class="text-3xl font-bold text-center mt-4">{RADIO_TITLE}</h1>
      <p class="mt-4 text-center">
        The Swarm's number one, karaoke radio player!
      </p>
    </Layout>
  );
}
