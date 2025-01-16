import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

function page() {
  // Hooks

  // Backend Calls

  // Refs and States
  const isLoggedIn = { firstname: "Blaze", isAuthenticated: true };
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
              user={isLoggedIn?.firstname || "Guest"}
              subtext="Acces your account and manage it efficiently."
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={3}
              totalCurrentBalance={1250.69}
            />
          </header>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default page;
