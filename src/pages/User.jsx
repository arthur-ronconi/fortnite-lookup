import React, { useContext, useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { AccountContext } from "../context/AccountContext";
import { UserInfoContext } from "../context/UserInfoContext";

export const User = () => {
  const FortniteAPI = require("fortnite-api-io");
  const fortniteAPI = new FortniteAPI("d4b0c477-a3bd4895-cf0dd77a-6d169cb7");

  const [accountId, setAccountId] = useContext(AccountContext);
  const [userInfo, setUserInfo] = useContext(UserInfoContext);
  const [username, setUsername] = useState();
  const [stats, setStats] = useState([]);

  let userData;
  useEffect(() => {
    const getUserInfo = (id) => {
      return fortniteAPI.getGlobalPlayerStats(id);
    };
    const getStats = async () => {
      try {
        const data = await getUserInfo(accountId);
        setUserInfo(await data);
        setUsername(data.name);
        userData = await data;
        console.log(userData);
        setStats(Object.entries(await userData.global_stats.solo));
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, []);

  useEffect(() => {
    console.log(stats[1]);
  }, [stats]);

  return (
    <div>
      {username ? (
        <div>
          <Hero title={username} className="jumbotron-user"/>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <h3>Solo</h3>
                <ul>
                  <li>KD: {stats[1]}</li>
                  <li>Win rate:</li>
                  <li>Kills:</li>
                  <li>Matches Played:</li>
                  <li>Players Outlived:</li>
                  <li>Top 1:</li>
                  <li>Top 3:</li>
                  <li>Top 5:</li>
                  <li>Top 10:</li>
                  <li>Top 25:</li>
                </ul>
              </div>
              <div className="col-4">
                <h3>Duo</h3>
              </div>
              <div className="col-4">
                <h3>Squad</h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Hero title="Loading..." />
      )}
    </div>
  );
};
