export function Header({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) {
  return (
    <div className="bg-background h-14 border-b border-dashed">
      <div className="flex h-full items-center justify-between px-4">
        <h1 className="text-lg">{title}</h1>
        {children}
      </div>
    </div>
  );
}
