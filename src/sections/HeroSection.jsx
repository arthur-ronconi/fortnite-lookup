import React from "react";
import { Hero } from "../components/Hero";
import { SearchForm } from "../components/SearchForm";
export const HeroSection = (props) => {
  return (
    <div className={props.className}>
      <Hero title={props.title}>
        <div className="row">
          <div className="col-12 col-lg-6">
            {props.search && <SearchForm />}
          </div>
          <div className="col-12 col-lg-6">
            <div className="image-gradient-bg">
              {props.showImage && (
                <img
                  src={require("../img/fortnite.png")}
                  alt="Dois personagens de Fortnite."
                  className="hero-img d-none d-lg-block"
                />
              )}
            </div>
          </div>
        </div>
      </Hero>
    </div>
  );
};
