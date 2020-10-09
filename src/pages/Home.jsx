import React from "react";
import { HeroSection } from "../sections/HeroSection";
import { NewsFeed } from "../sections/NewsFeed";
import { DailyItems } from "../sections/DailyItems";
import { UpcomingItems } from "../sections/UpcomingItems";

export const Home = () => {
  return (
    <div>
      <HeroSection title="Fortnite Stats" search={true} showImage={true} />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>News</h2>
            </div>
            <div className="col-md-4">
              <h2>Daily Items</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <NewsFeed title="News" />
            </div>
            <div className="col-md-4">
              <DailyItems title="Daily Items" />
              <UpcomingItems title="Upcoming Items" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
