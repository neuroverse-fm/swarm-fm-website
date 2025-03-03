import { RADIO_TITLE } from "../consts";

const HeaderItems: HeaderProps[] = [
  {
    page: "Community",
    href: "/community",
  },
  {
    page: "About",
    href: "/about",
  },
  {
    page: "Contact",
    href: "/contact",
  },
  {
    page: "Attributions",
    href: "/attributions",
  },
];

export function Header() {
  return (
    <header class="bg-green-600 text-white p-4">
      <nav class="container mx-auto flex justify-between">
        <a href="/" class="text-xl font-bold hover:underline">
          {RADIO_TITLE}
        </a>
        <div>
          {HeaderItems.map((item: HeaderProps) => (
            <a class="mr-4 hover:underline" href={item.href}>
              {item.page}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;