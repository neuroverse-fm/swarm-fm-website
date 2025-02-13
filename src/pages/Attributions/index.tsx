import { h } from 'preact';
import { Layout } from '../../layouts/Layout';
import { RADIO_TITLE_PLAIN } from '../../consts';

export function Attributions() {
  return (
    <Layout title="Community projects">
      <h1 class="text-3xl font-bold text-center">Attributions</h1>
      <p class="mt-4 text-xl text-center">Attributions for Swarm FM</p>
      <p class="text-md text-center"></p>
    </Layout>
  );
}