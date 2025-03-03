import { Layout } from "../../layouts/Layout";
import { RADIO_TITLE } from "../../consts";
import { SocialButton } from "../../components/SocialButton";
import { StyledLink } from "../../components/StyledLink";

const socials: socialProps[] = [
  {
    href: "https://twitch.tv/boop_dot",
    name: "Twitch (boop)",
    icon: "twitch",
    colours: "bg-purple-500 hover:bg-purple-700",
  },
  {
    href: "https://twitch.tv/swarmfm",
    name: "Twitch (Community)",
    icon: "twitch",
    colours: "bg-purple-500 hover:bg-purple-700",
  },
  {
    href: "https://youtube.com/watch?v=thCiTnOzkOM",
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

export function Home() {
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
