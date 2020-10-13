import React, { useState, useEffect } from "react";
import { api } from "../utils/api";

export const DailyItems = (props) => {
  const [dailyItems, setDailyItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  }, [dailyItems]);
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
          <div className="container">
            <ul className="row py-3">
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
        </div>
      )}
    </div>
  );
};
