import React from "react";
import AnimatedCountUp from "./AnimatedCountUp";
import DoughnutChart from "./DoughnutChart";

function TotalBalanceBox({
  accounts,
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) {
  // Hooks

  // Backend Calls

  // Refs and States

  // Emits

  // Functions

  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
        <div>
          <p className="total-balance-label">Total current balance</p>
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCountUp amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TotalBalanceBox;
