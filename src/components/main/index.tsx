interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </main>
  );
}
