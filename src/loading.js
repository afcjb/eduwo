import Loader from "react-loader-spinner";
import React from "react";

export default function loading() {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={150}
      width={150}
      timeout={3000}
    ></Loader>
  );
}
