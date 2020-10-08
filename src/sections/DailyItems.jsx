import React, { useState, useEffect } from "react";
import { api } from "../utils/api";

export const DailyItems = (props) => {
  const [dailyItems, setDailyItems] = useState([]);
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
  return (
    <div>
      <h2>{props.title}</h2>
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
  );
};
