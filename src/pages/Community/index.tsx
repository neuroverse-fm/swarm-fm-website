import { h } from 'preact';
import { Layout } from '../../layouts/Layout';
import { RADIO_TITLE_PLAIN } from '../../consts';

export function Community() {
  return (
    <Layout title="Community projects">
      <h1 class="text-3xl font-bold text-center">{RADIO_TITLE_PLAIN} community projects</h1>
      <p class="mt-4 text-xl text-center"></p>
    </Layout>
  );
}