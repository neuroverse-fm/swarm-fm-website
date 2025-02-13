import { h } from 'preact';
import { Layout } from '../../layouts/Layout';
import { RADIO_TITLE } from '../../consts';

export function Home() {
  return (
    <Layout title="Home">
      <h1 class="text-3xl font-bold text-center">{RADIO_TITLE}</h1>
      <p class="mt-4 text-center">The Swarm's number one, karaoke radio player!</p>
    </Layout>
  );
}