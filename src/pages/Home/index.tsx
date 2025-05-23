import { Layout } from "../../layouts/Layout";
import { RADIO_TITLE } from "../../consts";
import { SocialButton } from "../../components/SocialButton";
import { StyledLink } from "../../components/StyledLink";
import { useRadio } from "../../utils/RadioContext";

export function Home() {
  // Destructure streamUrl from the radio context; ensure this component is wrapped in RadioProvider
  const { streamUrl } = useRadio();

  // Use a fallback link if streamUrl is not yet available
  const youtubeLink = streamUrl
    ? streamUrl.replace("embed/", "watch?v=")
    : "https://youtube.com/@boop/live";

  const socials: socialProps[] = [
    {
      href: youtubeLink,
      name: "YouTube (Livestream)",
      icon: "youtube",
      colours: "bg-red-500 hover:bg-red-700",
    },
    {
      href: "https://discord.com/invite/SyHegkDmeF",
      name: "Discord",
      icon: "discord",
      colours: "bg-indigo-500 hover:bg-indigo-700",
    },
    {
      href: "https://buymeacoffee.com/boop_dot",
      name: "Buy Me a Coffee (boop)",
      icon: "coffee",
      colours: "bg-blue-400 hover:bg-blue-500",
    },
  ];

  return (
    <Layout title="Home">
      <div class="flex justify-center mt-4">
        <img src="/wide-tutel.png" class="max-h-48" />
      </div>
      <h1 class="text-3xl font-bold mt-4">{RADIO_TITLE}</h1>
      <p class="mt-4">The Swarm's number one, karaoke radio player!</p>
      <div class="flex justify-center mt-4 space-x-4">
        {socials.map((social: socialProps) => (
          <SocialButton
            href={social.href}
            icon={social.icon}
            colours={social.colours}
          >
            {social.name}
          </SocialButton>
        ))}
      </div>
      <br />
      <p class="text-xl">
        Want to embed Swarm FM into your recording studio (e.g. OBS)?
      </p>
      <StyledLink href="/overlays/instructions">
        Click here for instructions!
      </StyledLink>
    </Layout>
  );
}

export default Home;
