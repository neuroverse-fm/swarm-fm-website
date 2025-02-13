import { RADIO_TITLE } from '../consts';

const today = new Date();

export function Footer() {
	return (
		  <footer class="bg-green-600 text-white p-4 text-center">
        &copy; {today.getFullYear()} {RADIO_TITLE}.{" "}
        Site by <a href="https://ktrain5169.github.io/" class="text-blue-200 hover:underline hover:text-blue-300">HighKey</a>, Radio by boop_dot.{" "}
        Full attributions available <a href="/attributions" class="text-blue-200 hover:underline hover:text-blue-300">here</a>.
      </footer>
	);
}
