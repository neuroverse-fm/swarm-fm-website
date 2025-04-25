export function StyledLink({ href, children }: StyledLinkProps) {
  return (
    <a href={href} class="text-blue-200 hover:underline hover:text-blue-300">
      {children}
    </a>
  );
}

export default StyledLink;
