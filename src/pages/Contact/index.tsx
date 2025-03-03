import Layout from "../../layouts/Layout";
import { RADIO_TITLE_PLAIN } from "../../consts";
import StyledLink from "../../components/StyledLink";

export function Contact() {
  return (
    <Layout title="Contact">
      <h1 class="text-3xl font-bold text-center">
        Contact {RADIO_TITLE_PLAIN}
      </h1>
      <p class="mt-4 text-xl text-center">Please join the <StyledLink href="">Swarm FM Discord server</StyledLink>.</p>
    </Layout>
  );
}
