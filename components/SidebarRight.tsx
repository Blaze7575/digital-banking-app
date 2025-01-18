import Image from "next/image";
import Link from "next/link";
import React from "react";
import Bankcard from "./Bankcard";

function SidebarRight({ user, banks, transactions }: RightSidebarProps) {
  // Hooks

  // Backend Calls

  // Refs and States

  // Emits

  // Functions

  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>

          <div className="profile-details">
            <h2 className="profile-name">
              {user.firstName} {user.lastName}
            </h2>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>

        <div className="banks">
          <div className="w-full flex justify-between ">
            <h2 className="header-2">My Banks</h2>
            <Link href="/" className="flex gap-2">
              <Image
                src="/icons/plus.svg"
                width={20}
                height={20}
                alt="plus icon"
              />
              <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
            </Link>
          </div>

          <div className="flex w-full">
            {banks.length > 0 && (
              <div className="w-full relative flex flex-col flex-center gap-5">
                <div className="w-full relative z-10">
                  <Bankcard
                    key={banks[0].$id}
                    account={banks[0]}
                    userName={`${user.firstName} ${user.lastName}`}
                    showBalance={false}
                  />
                </div>
                {banks[1] && (
                  <div className="w-[90%] absolute top-8 left-8 z-0">
                    <Bankcard
                      key={banks[0].$id}
                      account={banks[0]}
                      userName={`${user.firstName} ${user.lastName}`}
                      showBalance={false}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </aside>
  );
}

export default SidebarRight;
