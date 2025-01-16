import SidebarLeft from "@/components/SidebarLeft";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = { firstname: "blaze" };

  return (
    <main className="w-full h-screen flex">
      <SidebarLeft user={isLoggedIn} />
      {children}
    </main>
  );
}
