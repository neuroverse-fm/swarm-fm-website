interface SocialButtonProps {
  href: string;
  icon: string;
  colours: string;
  children: preact.ComponentChildren;
}

export const SocialButton = ({
  href,
  icon,
  colours,
  children,
}: SocialButtonProps) => {
  const iconName = icon.toLocaleLowerCase;
  return (
    <a
      href={href}
      class={`flex items-center ${colours} text-white font-bold py-2 px-4 rounded`}
    >
      {/* <i class={`fab fa-${iconName} mr-2`}></i> */}
      {children}
    </a>
  );
};
