import Image from "next/image";
import Link from "next/link";
import React from "react";

function Bankcard({ account, userName, showBalance }: CreditCardProps) {
  // Hooks

  // Backend Calls

  // Refs and States

  // Emits

  // Functions

  return (
    <div className="flex flex-col">
      <Link href={"/"} className="bank-card">
        <div className="bank-card_content">
          <div>
            <h2 className="text-16 font-semibold text-white">
              {account.name || userName}
            </h2>
            <p className="text-16 font-semibold text-white font-ibm-plex-serif">
              Rs {account.currentBalance || "1251"}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between text-12 font-semibold text-white">
              <h2 className="">{account.name || userName}</h2>
              <h2> ●●/●●</h2>
            </div>
            <p className="text-14 semi-bold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●●{" "}
              <span className="text-14 font-semibold">
                {account?.mask || "1234"}
              </span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image
            src={"/icons/Paypass.svg"}
            width={20}
            height={20}
            alt="paypass"
          />
          <Image
            src={"/icons/mastercard.svg"}
            width={40}
            height={20}
            alt="mastercard"
          />

          <Image
            src="/icons/lines.png"
            width={316}
            height={190}
            alt="lines"
            className="absolute top-0 left-0"
          />
        </div>
      </Link>
    </div>
  );
}

export default Bankcard;
