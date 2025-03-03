import { Layout } from "../../layouts/Layout";
import { RADIO_TITLE_PLAIN } from "../../consts";
import { StyledLink } from "../../components/StyledLink";
import Block from "../../components/Blocks";

const AttribsList: AttributionProps[] = [
  {
    section: "Art",
    list: [
      {
        name: "key",
        link: "https://x.com/soulgluttony",
      },
      {
        name: "Taisato",
        link: "https://youtube.com/@TomaszRyszkowski",
      },
      {
        name: "Cerbruhrus",
        link: "https://www.youtube.com/channel/UCmTV2m4ULohfAs22-fKLv-Q",
      },
      {
        name: "TheOtherDum",
        link: "https://youtube.com/@otherdum",
      },
    ],
  },
  {
    section: "Code",
    list: [
      {
        name: "Cloudburst",
        link: "https://cloudburst.lgbt/",
      },
      {
        name: "Diablo",
        link: null,
      },
      {
        name: "Simo",
        link: null,
      },
    ],
  },
  {
    section: "Album Covers",
    list: [
      {
        name: "RiRi Creation (CFRB)",
        link: "https://youtu.be/D1f4VpzkvP8",
      },
      {
        name: "mr.fish399 (Cure for Me)",
        link: "https://x.com/MrFish399",
      },
      {
        name: "key (Remote Control, VIRUS)",
        link: "https://x.com/soulgluttony",
      },
    ],
  },
  {
    section: "Extra Thanks",
    list: [
      {
        name: "QueenPb",
        link: null,
      },
      {
        name: "vedal987",
        link: "https://twitch.tv/vedal987",
      },
      {
        name: "Neuro-sama + Evil Neuro",
        link: null,
      },
    ],
  },
];

export function Attributions() {
  return (
    <Layout title="Community projects">
      <div class="flex flex-col items-center">
        <h1 class="text-3xl font-bold text-center">Attributions</h1>
        <p class="mt-4 text-xl text-center">
          Attributions for {RADIO_TITLE_PLAIN}
        </p>
        <p class="text-md text-center">
          Please note these are attributions for the main Swarm FM radio stuff
          only.
        </p>
        <p class="text-md text-center italic mb-5">
          For community projects, please see their blocks in the{" "}
          <StyledLink href="/community">Community page</StyledLink>.
        </p>
        {AttribsList.map((attribution: AttributionProps) => (
          <Block title={attribution.section}>
            {attribution.list.map((helper: AttribsObjListProps) => (
              <p class="text-large">
                {helper.link !== null ? (
                  <StyledLink href={helper.link}>{helper.name}</StyledLink>
                ) : (
                  helper.name
                )}
              </p>
            ))}
          </Block>
        ))}
      </div>
    </Layout>
  );
}
