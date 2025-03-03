import Layout from "../../layouts/Layout";
import { RADIO_TITLE } from "../../consts";
import StyledLink from "../../components/StyledLink";

export function About() {
  return (
    <Layout title="About">
      <h1 class="text-3xl font-bold text-center">About {RADIO_TITLE}</h1>
      <p class="mt-4 text-center text-xl">{RADIO_TITLE} is a YouTube radio stream managed by <StyledLink href="https://youtube.com/@boop">boop.</StyledLink> for the Swarm to enjoy Neuro-sama karaokes & covers on loop 24/7.</p>
    </Layout>
  );
}
