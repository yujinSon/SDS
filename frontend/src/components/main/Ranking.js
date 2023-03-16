import React from 'react';
import 랭킹 from "../../assets/img/랭 킹.png";
import "./Ranking.css";

export default function Ranking() {
  const rankingData = [
    {
      rank: 1,
      player: "고병진",
      stage: "5-2",
      score: 5000,
      region: "일본",
    },
    {
      rank: 2,
      player: "손민혁",
      stage: "4-1",
      score: 4000,
      region: "한국",
    },
  ];

  return (
      <div className="ranking-container">
        <img src={랭킹} />
        <div className="ranking-titles">
          <h1>RANK</h1>
          <h1>PLAYER</h1>
          <h1>STAGE</h1>
          <h1>SCORE</h1>
          <h1>REGION</h1>
        </div>
        {rankingData.map((data) => (
            <div className="ranking-info">
              <span>{data.rank}</span>
              <span>{data.player}</span>
              <span>{data.stage}</span>
              <span>{data.score}</span>
              <span>{data.region}</span>
            </div>
        ))}
      </div>
  );
}
