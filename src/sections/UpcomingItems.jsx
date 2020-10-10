import React, { useState, useEffect } from "react";
import { api } from "../utils/api";

export const UpcomingItems = (props) => {
  const [upcomingItems, setUpcomingItems] = useState([]);

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
    <div className="mt-5">
      <h2>Upcoming Items</h2>
      <div className="container">
        <ul className="row py-3">
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
  );
};
