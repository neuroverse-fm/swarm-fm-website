import Layout from "../../layouts/Layout";
import { RADIO_TITLE, RADIO_TITLE_PLAIN } from "../../consts";
import StyledLink from "../../components/StyledLink";

export function About() {
  return (
    <Layout title="About">
      <h1 class="text-3xl font-bold text-center">About {RADIO_TITLE}</h1>
      <p class="mt-4 text-center text-xl">{RADIO_TITLE} is a YouTube radio stream managed by <StyledLink href="https://youtube.com/@boop">boop.</StyledLink> for the Swarm to enjoy Neuro-sama karaokes & covers on loop 24/7.</p>
      <h1 class="text-2xl mt-5 font-bold text-center">
        Contact boop (the {RADIO_TITLE_PLAIN} operator)
      </h1>
      <p class="mt-4 text-xl text-center">Please join the <StyledLink href="https://discord.gg/SyHegkDmeF">{RADIO_TITLE_PLAIN} Discord server</StyledLink>.</p>
    </Layout>
  );
}
