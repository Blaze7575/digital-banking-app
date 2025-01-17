"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function MoblieNavbar({ user }: MobileNavProps) {
  // Hooks

  // Backend Calls

  // Refs and States
  const pathname = usePathname();

  // Emits

  // Functions

  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/icons/hamburger.svg"
          width={30}
          height={30}
          alt="menu open button icon"
        />
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-white border-none">
        <nav className="flex flex-col gap-6">
          <SheetHeader>
            <div className="ml-2 flex">
              <Link
                href={"/"}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Image
                  src={"/icons/logo.svg"}
                  width={34}
                  height={34}
                  alt="Horizon"
                />
                <SheetTitle className=" text-black-1 font-ibm-plex-serif">
                  Horizon
                </SheetTitle>
              </Link>
            </div>
          </SheetHeader>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <div>
                {sidebarLinks.map((elem, i) => {
                  const isActive =
                    pathname === elem.route ||
                    pathname.startsWith(`${elem.route}/`);

                  return (
                    <SheetClose asChild key={i}>
                      <Link
                        href={elem.route}
                        className={cn("mobilenav-sheet_close", {
                          "bg-bank-gradient": isActive,
                        })}
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
                          className={cn("", {
                            "!text-white": isActive,
                          })}
                        >
                          {elem.label}
                        </span>
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>
            </SheetClose>
          </div>
          USER
        </nav>
        FOOTER
      </SheetContent>
    </Sheet>
  );
}

export default MoblieNavbar;
