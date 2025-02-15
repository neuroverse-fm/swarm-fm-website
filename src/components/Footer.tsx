import { RADIO_TITLE } from "../consts";
import { StyledLink } from "./StyledLink";

const today = new Date();

export function Footer() {
  return (
    <footer class="bg-green-600 text-white p-4 text-center">
      &copy; {today.getFullYear()} {RADIO_TITLE}. Site by{" "}
      <StyledLink href="https://ktrain5169.github.io/">HighKey</StyledLink>,
      Radio by{" "}
      <StyledLink href="https://youtube.com/@boop">boop_dot</StyledLink>. Full
      attributions available <StyledLink href="/attributions">here</StyledLink>.
    </footer>
  );
}
