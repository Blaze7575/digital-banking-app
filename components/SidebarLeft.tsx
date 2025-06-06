"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "./Footer";

function SidebarLeft({ user }: SiderbarProps) {
  // Hooks

  // Backend Calls

  // Refs and States
  const pathname = usePathname();
  // Emits

  // Functions

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-6">
        <div className="ml-2 mb-6 flex">
          <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
            <Image
              src={"/icons/logo.svg"}
              width={34}
              height={34}
              className="max-xl:size-14"
              alt="Horizon"
            />
            <h1 className="sidebar-logo">Horizon</h1>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {sidebarLinks.map((elem, i) => {
            const isActive =
              pathname === elem.route || pathname.startsWith(`${elem.route}/`);

            return (
              <Link
                href={elem.route}
                className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
                key={i}
              >
                <div className="relative size-6">
                  <Image
                    src={elem.imgURL}
                    fill
                    alt={elem.label}
                    className={cn({
                      "brightness-[3] invert-0": isActive,
                    })}
                  />
                </div>
                <span
                  className={cn("sidebar-label", { "!text-white": isActive })}
                >
                  {elem.label}
                </span>
              </Link>
            );
          })}
        </div>
        USER
      </nav>
      <Footer user={user} />
    </section>
  );
}

export default SidebarLeft;
