import React, { useEffect, useState } from "react";
import { api } from "../utils/api";
import { CardHorizontal } from "../components/CardHorizontal";

export const NewsFeed = (props) => {
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = () => {
      return api().getNews("br", { lang: "en" });
    };
    const setNews = async () => {
      const news = await getNews();
      const newsProperties = Object.entries(await news.news);

      // console.log(newsProperties[0][1]);
      const titleList = [];
      for (let i = 0; i < 5; i++) {
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
    setLoading(false);
  }, [titles]);

  return (
    <div>
      {loading ? (
        <div className="loading d-flex align-items-center justify-content-center">
          <div className="spinner-border text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <h2>{props.title}</h2>
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
      )}
    </div>
  );
};
