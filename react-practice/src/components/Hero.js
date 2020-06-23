import React from "react";

function Hero({ HeroName }) {
  if (HeroName === "joker") {
    throw new Error("Not a Hero");
  }
  return <div>{HeroName}</div>;
}

export default Hero;
