import React from "react";
import { Hero } from "../components/Hero";

export const ErrorPage = () => {
  return (
    <div>
      <Hero title={"Error"}>
        <a href="/" className="text-white">
          {"<  Back to homepage"}
        </a>
      </Hero>
      <div className="container">
        <div className="section section-error">
          <h2>Sorry :(</h2>
          <p className="lead">
            We didn't find the data for the requested user.
          </p>
        </div>
      </div>
    </div>
  );
};
