export function Header({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) {
  return (
    <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 border-border/40 z-50 border-b backdrop-blur">
      <div className="flex h-14 items-center justify-between px-4">
        <h1 className="text-lg">{title}</h1>
        {children}
      </div>
    </div>
  );
}
