import React, { useState } from "react";
import Roles from "./Roles";
import { useLocation } from "react-router-dom";

const Gamepage: React.FC = () => {
  //show Roulespage
  const [showRules, setShowRules] = useState(false);

  const toggleRulesModal = () => {
    setShowRules(!showRules);
  };

  const rolldice = () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const player1 = searchParams.get("player1");
  const player2 = searchParams.get("player2");
  const winnerScore = searchParams.get("winnerScore");
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentplayer, setcurrentplayer] = useState();

  console.log(player1, player2, winnerScore);

  return (
    <div className="flex flex-col items-center justify-center bg-black ">
      <h1 className="text-white">PIG GAME</h1>
      <div className="container flex flex-row items-center justify-center">
        <div className="py-40 bg-red-400 px-36">
          <p>{player1}</p>
          <h2>Player 1 Score: {player1Score}</h2>

          <h2>Current Player: Player {currentplayer}</h2>
        </div>
        <div className="py-40 bg-red-500 px-36">
          <p>{player2}</p>
          <h2>Player 1 Score: {player2Score}</h2>
          <h2>Current Player: Player {currentplayer}</h2>
        </div>
      </div>
      <p>Winner Score: {winnerScore}</p>
      <button
        className="px-5 py-1 mb-3 text-white bg-red-700 rounded-lg"
        onClick={RollDice}
      >
        RollDice
      </button>
      <button className="px-5 py-1 mb-3 text-white bg-red-700 rounded-lg">
        Hold
      </button>
      <button className="px-5 py-1 mb-3 text-white bg-red-700 rounded-lg">
        New Game
      </button>
      <button
        onClick={toggleRulesModal}
        className="px-5 py-1 mb-3 text-white bg-red-700 rounded-lg"
      >
        Rules
      </button>

      {showRules && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-8 bg-white rounded-lg">
            <Roles />
            <button
              onClick={toggleRulesModal}
              className="px-4 py-2 mt-4 text-white bg-red-700 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gamepage;
