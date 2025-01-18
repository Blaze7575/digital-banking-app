import HeaderBox from "@/components/HeaderBox";
import SidebarRight from "@/components/SidebarRight";
import TotalBalanceBox from "@/components/TotalBalanceBox";

import React from "react";

function page() {
  // Hooks

  // Backend Calls

  // Refs and States
  const isLoggedIn: User = {
    firstName: "Blaze",
    lastName: "7575",
    email: "blaze@zahoo.com",
    $id: "",
    address1: "",
    userId: "",
    city: "",
    dateOfBirth: "",
    dwollaCustomerId: "",
    dwollaCustomerUrl: "",
    postalCode: "",
    ssn: "",
    state: "",
  };
  // Emits

  // Functions

  return (
    <>
      <div className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={isLoggedIn?.firstName || "Guest"}
              subtext="Acces your account and manage it efficiently."
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={3}
              totalCurrentBalance={1250.69}
            />
          </header>
          RECENT TRANSACTIONS
        </div>
        <SidebarRight user={isLoggedIn} transactions={[]} banks={[{}, {}]} />
      </div>
    </>
  );
}

export default page;
