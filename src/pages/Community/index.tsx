import Layout from "../../layouts/Layout";
import { RADIO_TITLE_PLAIN } from "../../consts";

const projects: ProjectsProps[] = [
  {
    name: "SwarmFM Player",
    author: "Gwa Shark",
    description: "An application that comes with Auto-Startup, Pin On Top, and of course, the stream that powers it all.",
    image: "/community/SwarmFM-Player.png",
    source: "https://github.com/gwashark/swarmfm-player",
    link: "https://github.com/gwashark/swarmfm-player/releases/",
    linkText: "Install"
  },
  {
    name: "SwarmFM Extension",
    author: "akane",
    description: "A[n] extension that only goes to SwarmFM.",
    image: "/community/SwarmFM-Extension.png",
    source: "https://github.com/tywaraxe/SwarmFM-Extension",
    link: "https://github.com/tywaraxe/SwarmFM-Extension/releases/tag/Femboysocks",
  },
  {
    name: "Nuru",
    author: "Gwa Shark",
    description: "A Discord Bot for Swarm FM Reminders and More Neuro Fun!",
    image: "/community/NuruReminders.png",
    link: "https://discord.com/oauth2/authorize?client_id=1333173911524999178"
  },
  {
    name: "boop's Twitch channel",
    author: "boop.",
    description: "boop's Twitch channel. Usually streams development of SwarmFM along with playing SwarmFM.",
    link: "https://twitch.tv/boop_dot",
    linkText: "Watch"
  },
  {
    name: "SwarmFM Community Twitch Channel",
    author: "Gwa Shark, HighKey, RaneingClouds",
    description: "The channel where SwarmFM community streams happen! Usually consists of Minecraft & dev streams.",
    link: "https://twitch.tv/swarmfm",
    linkText: "Watch"
  }
];

export function Community() {
  return (
    <Layout title="Community projects">
      <h1 class="text-3xl font-bold text-center">
        {RADIO_TITLE_PLAIN} community projects
      </h1>
      <p class="mt-4 text-xl text-center">
        These are the community projects surrounding {RADIO_TITLE_PLAIN}.
      </p>
      <div class="flex flex-wrap justify-center">
        {projects.map((project: ProjectsProps) => (
          <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
            {project.image && (
              <img class="w-full" src={project.image} alt={project.name} />
            )}
            <div class="px-6 py-6 text-center">
              <a class="font-bold text-xl mb-2 text-center">
                {project.name}
              </a>
              <p class="font-italic text-md mb-2 text-center"> by {project.author}</p>
              <p class="text-base text-center">{project.description}</p>
            </div>
            <div class="px-6 pt-4 pb-2 text-center">
              {project.source && (
                <a
                  href={project.source}
                  class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  View Source
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  {project.linkText ? project.linkText : "Visit"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
