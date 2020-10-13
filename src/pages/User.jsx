import React, { useContext, useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { AccountContext } from "../context/AccountContext";
import { UserInfoContext } from "../context/UserInfoContext";
import { HeroSection } from "../sections/HeroSection";
import { api } from "../utils/api";
import { StatsList } from "../components/StatsList";
import { useHistory } from "react-router-dom";

export const User = () => {
  const [accountId, setAccountId] = useContext(AccountContext);
  const [userInfo, setUserInfo] = useContext(UserInfoContext);
  const history = useHistory();

  useEffect(() => {
    const getUserInfo = (id) => {
      return api().getGlobalPlayerStats(id);
    };
    const getStats = async () => {
      try {
        const data = await getUserInfo(accountId);
        setUserInfo(await data);
      } catch (err) {
        console.error(err);
      }
    };
    getStats();
  }, []);

  return (
    <div>
      {userInfo ? (
        <div>
          <HeroSection
            title="Fortnite Stats"
            search={false}
            showImage={false}
            backBtn={true}
          />
          <div className="container">
            <h1 className="my-5">{userInfo.name}</h1>
            <div className="stats mb-5">
              <div className="row">
                <div className="col-4">
                  <h2 className="text-primary mb-4">Solo</h2>
                  <StatsList
                    kd={userInfo.global_stats.solo.kd}
                    winrate={userInfo.global_stats.solo.winrate}
                    kills={userInfo.global_stats.solo.kills}
                    matchesplayed={userInfo.global_stats.solo.matchesplayed}
                    playersoutlived={userInfo.global_stats.solo.playersoutlived}
                    placetop1={userInfo.global_stats.solo.placetop1}
                    placetop3={userInfo.global_stats.solo.placetop3}
                    placetop5={userInfo.global_stats.solo.placetop5}
                    placetop10={userInfo.global_stats.solo.placetop10}
                    placetop25={userInfo.global_stats.solo.placetop25}
                  />
                </div>
                <div className="col-4">
                  <h2 className="text-primary mb-4">Duo</h2>
                  <StatsList
                    kd={userInfo.global_stats.duo.kd}
                    winrate={userInfo.global_stats.duo.winrate}
                    kills={userInfo.global_stats.duo.kills}
                    matchesplayed={userInfo.global_stats.duo.matchesplayed}
                    playersoutlived={userInfo.global_stats.duo.playersoutlived}
                    placetop1={userInfo.global_stats.duo.placetop1}
                    placetop3={userInfo.global_stats.duo.placetop3}
                    placetop5={userInfo.global_stats.duo.placetop5}
                    placetop10={userInfo.global_stats.duo.placetop10}
                    placetop25={userInfo.global_stats.duo.placetop25}
                  />
                </div>
                <div className="col-4">
                  <h2 className="text-primary mb-4">Squad</h2>
                  <StatsList
                    kd={userInfo.global_stats.squad.kd}
                    winrate={userInfo.global_stats.squad.winrate}
                    kills={userInfo.global_stats.squad.kills}
                    matchesplayed={userInfo.global_stats.squad.matchesplayed}
                    playersoutlived={
                      userInfo.global_stats.squad.playersoutlived
                    }
                    placetop1={userInfo.global_stats.squad.placetop1}
                    placetop3={userInfo.global_stats.squad.placetop3}
                    placetop5={userInfo.global_stats.squad.placetop5}
                    placetop10={userInfo.global_stats.squad.placetop10}
                    placetop25={userInfo.global_stats.squad.placetop25}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading d-flex align-items-center justify-content-center">
          <div className="spinner-border text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};
