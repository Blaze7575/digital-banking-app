import React from "react";

function HeaderBox({ type, user, title, subtext }: HeaderBoxProps) {
  // Hooks

  // Backend Calls

  // Refs and States

  // Emits

  // Functions

  return (
    <div className="header-box">
      <p className="header-box-title">
        {title}
        &nbsp;
        {type === "greeting" && <span className="text-[#0179FE]">{user}</span>}
      </p>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
}

export default HeaderBox;
