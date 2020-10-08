import React from "react";
import { HeroSection } from "../sections/HeroSection";
import { NewsFeed } from "../sections/NewsFeed";
import { DailyItems } from "../sections/DailyItems";
import { UpcomingItems } from "../sections/UpcomingItems";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <NewsFeed title="News" />
            </div>
            <div className="col-4">
              <DailyItems title="Daily Items" />
              <UpcomingItems title="Upcoming Items" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
