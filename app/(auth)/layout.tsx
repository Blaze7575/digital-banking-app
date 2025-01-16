export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      Authentication pages
      {children}
    </main>
  );
}
