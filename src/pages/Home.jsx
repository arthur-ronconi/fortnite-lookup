import React from "react";
import { Hero } from "../components/Hero";
import { SearchForm } from "../components/SearchForm";
export const Home = () => {
  return (
    <div>
      <Hero title="Fortnite Lookup">
        <div className="col-lg-5 px-0">
          <SearchForm />
        </div>
      </Hero>
    </div>
  );
};
