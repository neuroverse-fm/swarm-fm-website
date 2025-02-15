import { Layout } from "../../layouts/Layout";
import { RADIO_TITLE_PLAIN } from "../../consts";
import { StyledLink } from "../../components/StyledLink";

export function Attributions() {
  return (
    <Layout title="Community projects">
      <h1 class="text-3xl font-bold text-center">Attributions</h1>
      <p class="mt-4 text-xl text-center">
        Attributions for {RADIO_TITLE_PLAIN}
      </p>
      <p class="text-md text-center">
        Please note these are attributions for the main Swarm FM radio stuff
        only.
      </p>
      <p class="text-md text-center italic">
        For community projects, please see their blocks in the{" "}
        <StyledLink href="/community">Community page</StyledLink>.
      </p>
    </Layout>
  );
}
