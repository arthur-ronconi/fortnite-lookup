import React, { useEffect, useState } from "react";
import { CardHorizontal } from "../components/CardHorizontal";
import { Hero } from "../components/Hero";
import { SearchForm } from "../components/SearchForm";
export const Home = () => {
  const FortniteAPI = require("fortnite-api-io");
  const fortniteAPI = new FortniteAPI("d4b0c477-a3bd4895-cf0dd77a-6d169cb7");
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const getNews = () => {
      return fortniteAPI.getNews("br", { lang: "en" });
    };

    const setNews = async () => {
      const news = await getNews();
      const newsProperties = Object.entries(await news.news);

      console.log(newsProperties[0][1]);
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
    console.log(titles);
  }, [titles]);

  return (
    <div>
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
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h2 className="ml-3">News</h2>
              <ul className="py-3">
                {titles.map((item) => {
                  return (
                    <li key={Math.random() * 100}>
                      <CardHorizontal title={item[0]} imgSrc={item[2]} body={item[1]}/>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};