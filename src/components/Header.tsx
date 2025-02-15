import { RADIO_TITLE } from "../consts";

export function Header() {
  return (
    <header class="bg-green-600 text-white p-4">
      <nav class="container mx-auto flex justify-between">
        <a href="/" class="text-xl font-bold hover:underline">
          {RADIO_TITLE}
        </a>
        <div>
          <a href="/community" class="mr-4">
            Community
          </a>
          <a href="/about" class="mr-4">
            About
          </a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}
