export function Header({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) {
  return (
    <div className="bg-background fixed top-0 z-50 w-full border-b">
      <div className="flex h-14 items-center justify-between px-6">
        <h1 className="text-lg">{title}</h1>
        {children}
      </div>
    </div>
  );
}
