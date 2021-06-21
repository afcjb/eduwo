import React from "react";
import logo from "./utils/eduwuLogo.svg";
import Profile from "./Profile";
import "./styles.css"

export default function Header() {
  return (
    <div className="d-flex p-4 justify-content-between header-gradient">
      <img src={logo} alt="Eduwu Logo"></img>
      <Profile></Profile>
    </div>
  );
}
