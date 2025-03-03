interface LayoutProps {
  title: string;
  children: preact.ComponentChildren;
}

interface HeaderProps {
  page: string;
  href: string;
}

interface OverlayDisplayProps {
  name: string;
  url: string;
}

interface ProjectsProps {
  name: string;
  author: string;
  description: string;
  image?: string;
  source?: string;
  link?: string;
  linkText?: string;
}

interface AttributionProps {
  section: string;
  list: AttribsObjListProps[];
}

interface AttribsObjListProps {
  name: string;
  link: string | null;
}

interface StyledLinkProps {
  href: string;
  children: preact.ComponentChildren;
}

interface SocialButtonProps {
  href: string;
  icon: string;
  colours: string;
  children: preact.ComponentChildren;
}

interface socialProps {
  href: string;
  name: string;
  icon: string;
  colours: string;
}

interface BlockProps {
  title: string;
  children: preact.ComponentChildren;
}
