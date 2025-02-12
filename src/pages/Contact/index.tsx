import { h } from 'preact';
import { Layout } from '../../layouts/Layout';
import { RADIO_TITLE_PLAIN } from '../consts';

export function Contact() {
  return (
    <Layout title="Contact">
      <h1 class="text-3xl font-bold">Contact {RADIO_TITLE_PLAIN}</h1>
      <p class="mt-4">Contact us via:</p>
    </Layout>
  );
}