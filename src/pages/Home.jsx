import React, { useEffect, useState } from "react";
import { HeroSection } from "../sections/HeroSection";
import { CardHorizontal } from "../components/CardHorizontal";
import { Hero } from "../components/Hero";
import { SearchForm } from "../components/SearchForm";
import { api } from "../utils/api";
export const Home = () => {
  const [titles, setTitles] = useState([]);
  const [dailyItems, setDailyItems] = useState([]);
  const [upcomingItems, setUpcomingItems] = useState([]);

  useEffect(() => {
    const getNews = () => {
      return api().getNews("br", { lang: "en" });
    };

    const setNews = async () => {
      const news = await getNews();
      const newsProperties = Object.entries(await news.news);

      // console.log(newsProperties[0][1]);
      const titleList = [];
      for (let i = 0; i < 10; i++) {
        titleList.push([
          newsProperties[i][1].title,
          newsProperties[i][1].body,
          newsProperties[i][1].image,
        ]);
      }
      setTitles(titleList);
    };
    setNews();
  }, []);

  useEffect(() => {
    const getShop = () => {
      return api().getDailyShop("en");
    };
    const setShop = async () => {
      const shop = await getShop();
      const dailyShop = await shop.daily;
      setDailyItems(dailyShop);
    };
    setShop();
  }, []);

  useEffect(() => {
    const getUpcoming = () => {
      return api().listUpcomingItems("en");
    };
    const setUpcoming = async () => {
      let list = [];
      const upcoming = await getUpcoming();
      for (let i = 0; i < 6; i++) {
        list.push(upcoming.items[i]);
      }
      setUpcomingItems(list);
    };
    setUpcoming();
  }, []);

  useEffect(() => {
    console.log(upcomingItems);
  }, [upcomingItems]);

  return (
    <div>
      <HeroSection />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h2 className="ml-3">News</h2>
              <ul className="py-3">
                {titles.map((item) => {
                  return (
                    <li key={Math.random() * 100}>
                      <CardHorizontal
                        title={item[0]}
                        imgSrc={item[2]}
                        body={item[1]}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-4">
              <div>
                <h2>Daily Items</h2>
                <ul className="row">
                  {dailyItems.map((item) => {
                    return (
                      <li key={Math.random() * 100} className="col-6 p-0">
                        <div className="card card-daily">
                          <img
                            src={item.full_background}
                            alt={item.name}
                            className="card-img"
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="mt-5">
                <h2>Upcoming Items</h2>
                <ul className="row">
                  {upcomingItems.map((item) => {
                    return (
                      <li key={Math.random() * 100} className="col-6 p-0">
                        <div className="card card-daily">
                          <img
                            src={item.images.full_background}
                            alt={item.name}
                            className="card-img"
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
