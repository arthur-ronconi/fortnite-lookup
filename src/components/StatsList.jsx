import React from "react";
export const StatsList = (props) => {
  return (
    <ul>
      <li>
        KD: <span className="data">{props.kd}</span>
      </li>
      <li>
        Win rate: <span className="data">{props.winrate}</span>
      </li>
      <li>
        Kills: <span className="data">{props.kills}</span>
      </li>
      <li>
        Matches Played: <span className="data">{props.matchesplayed}</span>
      </li>
      <li>
        Players Outlived: <span className="data">{props.playersoutlived}</span>
      </li>
      <li>
        Top 1: <span className="data">{props.placetop1}</span>
      </li>
      <li>
        Top 3: <span className="data">{props.placetop3}</span>
      </li>
      <li>
        Top 5: <span className="data">{props.placetop5}</span>
      </li>
      <li>
        Top 10: <span className="data">{props.placetop10}</span>
      </li>
      <li>
        Top 25: <span className="data">{props.placetop25}</span>
      </li>
    </ul>
  );
};
