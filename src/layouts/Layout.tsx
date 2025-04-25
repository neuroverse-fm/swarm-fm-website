import Footer from "../components/Footer";
import Header from "../components/Header";
import { RADIO_TITLE } from "../consts";

export function Layout({ title, children }: LayoutProps) {
  const formattedTitle = `${title} | ${RADIO_TITLE}`;
  return (
    <div class="min-h-screen flex flex-col">
      <title>{formattedTitle}</title>
      <Header />
      <main class="flex-grow container mx-auto p-4 text-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
