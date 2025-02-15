import { Layout } from "../../layouts/Layout";
import { RADIO_TITLE_PLAIN } from "../../consts";

export function About() {
  return (
    <Layout title="About">
      <h1 class="text-3xl font-bold text-center">About {RADIO_TITLE_PLAIN}</h1>
      <p class="mt-4 text-center text-xl"></p>
    </Layout>
  );
}
