import MoblieNavbar from "@/components/MobileNavbar";
import SidebarLeft from "@/components/SidebarLeft";
import { getLoggedInUser } from "@/lib/getLoggedInUser";
import Image from "next/image";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const isLoggedIn = { firstname: "blaze" };
  const isLoggedIn = await getLoggedInUser();
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
