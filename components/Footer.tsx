import { logout } from "@/lib/actions/user.actions";
import { FooterProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Footer({ user, type = "desktop" }: FooterProps) {
  // Refs and States

  // Hooks
  const router = useRouter();

  // Emits

  // Functions
  const handleLogOut = async () => {
    const loggedOut = await logout();

    router.push("/Login");
  };

  return (
    <div className="flex items-center gap-4 justify-between">
      <div>
        <div className="size-[50px] rounded-[50%]  font-semibold text-2xl bg-gray-700 flex flex-center">
          <span className="-translate-y-[1px]">{user.name[0]}</span>
        </div>
      </div>
      <div className="w-[200px] flex flex-col">
        <span className="text-black-1 font-semibold">{user.name}</span>
        <span className="text-gray-500">{user.email}</span>
      </div>
      <button onClick={handleLogOut}>
        <Image src="/icons/logout.svg" width={35} height={35} alt="logout" />
      </button>
    </div>
  );
}

export default Footer;
