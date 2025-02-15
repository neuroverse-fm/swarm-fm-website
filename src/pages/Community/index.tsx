import { Layout } from "../../layouts/Layout";
import { RADIO_TITLE_PLAIN } from "../../consts";

interface ProjectsProps {
  name: string;
  author: string;
  description: string;
  image?: string;
  source?: string;
  link?: string;
}

const projects: ProjectsProps[] = [
  {
    name: "SwarmFM Player",
    author: "gwashark",
    description: "A Swarm FM Player for your computer.",
    image: null,
    source: "https://github.com/gwashark/swarmfm-player",
    link: "https://github.com/gwashark/swarmfm-player/releases/tag/v0.0.0",
  },
  {
    name: "SwarmFM Extension",
    author: "akane",
    description: "A[n] extension that only goes to SwarmFM.",
    image: null,
    source: "https://github.com/tywaraxe/SwarmFM-Extension",
    link: "https://github.com/tywaraxe/SwarmFM-Extension/releases/tag/Femboysocks",
  },
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
                {project.name} by {project.author}
              </a>
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
                  Visit
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
