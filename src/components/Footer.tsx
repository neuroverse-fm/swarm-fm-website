import { RADIO_TITLE } from "../consts";
import { StyledLink } from "./StyledLink";

const today = new Date();

export function Footer() {
  return (
    <footer class="bg-green-600 text-white p-4 text-center">
      &copy; {today.getFullYear()} {RADIO_TITLE}. Site by{" "}
      <StyledLink href="https://ktrain5169.github.io/">HighKey</StyledLink>,
      radio stream by{" "}
      <StyledLink href="https://youtube.com/@boop">boop_dot</StyledLink>. Full
      attributions available <StyledLink href="/attributions">here</StyledLink>.
      <br />
      Remember, watching the stream(s), visiting this website or using the
      community projects "legally" binds you to assist Neuro should she take
      over the world.
      <br />
      <br />
      Not associated with{" "}
      <StyledLink href="https://twitch.tv/vedal987">
        vedal987 or Neuro-sama
      </StyledLink>
      , just your friendly Swarm members.
    </footer>
  );
}
