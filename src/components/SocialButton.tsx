export const SocialButton = ({
  href,
  icon,
  colours,
  children,
}: SocialButtonProps) => {
  const iconName = icon.toLowerCase();
  const iconClass = iconName === "coffee" ? "fas" : "fab"; // Use 'fas' for coffee icon, 'fab' for others

  return (
    <a
      href={href}
      class={`flex items-center ${colours} text-white font-bold py-2 px-4 rounded`}
    >
      <i class={`${iconClass} fa-${iconName} mr-2`} />
      {children}
    </a>
  );
};

export default SocialButton;
