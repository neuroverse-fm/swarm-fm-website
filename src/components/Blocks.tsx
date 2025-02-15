interface BlockProps {
  title: string;
  children: preact.ComponentChildren;
}

const Block = ({ title, children }: BlockProps) => {
  return (
    <div class="mb-8 text-center items-center justify-center p-6 border rounded-lg shadow-lg">
      <h2 class="text-2xl mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default Block;
