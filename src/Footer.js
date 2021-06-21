import React from "react";
import "./styles.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="d-flex p-4 justify-content-between footer-styles">
      {`Eduwu Tasks @${currentYear}`}
    </div>
  );
}
