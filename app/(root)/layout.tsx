import MoblieNavbar from "@/components/MobileNavbar";
import SidebarLeft from "@/components/SidebarLeft";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = { firstname: "blaze" };

  return (
    <main className="w-full h-screen flex">
      <SidebarLeft user={isLoggedIn} />

      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="Menu icon" />
          <div>
            <MoblieNavbar user={isLoggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
