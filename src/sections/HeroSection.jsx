import React from "react";
import { Hero } from "../components/Hero";
import { SearchForm } from "../components/SearchForm";
export const HeroSection = () => {
  return (
    <Hero title="Fortnite Stats">
      <div className="row">
        <div className="col-lg-6">
          <SearchForm />
        </div>
        <div className="col-lg-6">
          <div className="image-gradient-bg">
            <img
              src={require("../img/fortnite.png")}
              alt="Dois personagens de Fortnite."
              className="hero-img d-none d-lg-block"
            />
          </div>
        </div>
      </div>
    </Hero>
  );
};
