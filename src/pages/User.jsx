import React from "react";
import { Hero } from "../components/Hero";
export const User = () => {
  let userName = "Ninja";
  return (
    <div>
      <Hero title={userName} />
    </div>
  );
};
