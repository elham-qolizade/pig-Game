import React, { useState } from "react";
import Roles from "./Roles";
//import image
import { useLocation } from "react-router-dom";
import dice1 from "../assets/dice1.png";
import dice2 from "../assets/dice2.png";
import dice3 from "../assets/dice3.png";
import dice4 from "../assets/dice4.png";
import dice5 from "../assets/dice5.png";
import dice6 from "../assets/dice6.png";

const Gamepage: React.FC = () => {
  //show rules
  const [showRules, setShowRules] = useState(false);
  const toggleRulesModal = () => {
    setShowRules(!showRules);
  };
  //Show pictures with dice
  const [diceImage, setDiceImage] = useState<string>("");
  // Rolldice function
  const Rolldice = () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
    setDiceImage(diceImages[diceRoll - 1]);

    if (diceRoll === 1) {
      setCurrentRoundScore(0);
      togglePlayer();
    } else {
      setCurrentRoundScore(currentRoundScore + diceRoll);
    }
  };
  //holdscore function
  const holdscore = () => {
    if (currentplayer === 1) {
      setPlayer1Score(player1Score + currentRoundScore);
    } else {
      setPlayer2Score(player2Score + currentRoundScore);
    }
    togglePlayer();
    setCurrentRoundScore(0);
    checkGameOver();
  };
  //togglePlayer function
  const togglePlayer = () => {
    setcurrentplayer(currentplayer === 1 ? 2 : 1);
  };

  const Newgame = () => {
    setCurrentRoundScore(0);
    setPlayer1Score(0);
    setPlayer2Score(0);
  };
  //checkGameOver function
  // const checkGameOver = () => {
  //   if (player1Score >= 100 || player2Score >= 100) {
  //     setGameOver(true);
  //     setWinner(player1Score >= 100 ? "Player 1" : "Player 2");
  //   }
  // };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const player1 = searchParams.get("player1");
  const player2 = searchParams.get("player2");
  const winnerScore = searchParams.get("winnerScore");

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentplayer, setcurrentplayer] = useState(1);
  const [currentRoundScore, setCurrentRoundScore] = useState(0);

  // const [gameOver, setGameOver] = useState(false);

  // const [winner, setWinner] = useState(null);

  console.log(player1, player2, winnerScore);

  return (
    <div className="bg-black">
      <div className="container flex flex-col items-center justify-center ">
        <h1 className="pt-6 text-3xl text-white">PIG GAME</h1>
        <button
          onClick={Newgame}
          className="px-5 py-1 mb-3 text-white translate-y-24 bg-black rounded-lg"
        >
          New Game
        </button>
        <div className="container flex flex-col items-center justify-center lg:flex-row">
          <div className="flex flex-col items-center justify-center gap-16 py-10 bg-red-900 lg:rounded-s-2xl px-36">
            <p className="text-5xl text-white">{player1}</p>
            <h2 className="text-5xl text-white"> {player1Score}</h2>
            <div className="p-3 mb-2 text-center text-white bg-red-600 rounded-lg">
              <p>current</p>
              {currentRoundScore}
            </div>
            <h2 className="text-white"> Player {currentplayer}</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-16 py-10 bg-red-800 lg:rounded-e-2xl px-36">
            <p className="text-5xl text-white">{player2}</p>
            <h2 className="text-5xl text-white"> {player2Score}</h2>
            <div className="p-3 mb-2 text-center text-white bg-red-600 rounded-lg">
              <p>current</p>
              {currentRoundScore}
            </div>
            <h2 className="text-white"> Player {currentplayer}</h2>
          </div>
        </div>
        <div className="flex flex-row items-center gap-10 mt-10">
          <button
            onClick={toggleRulesModal}
            className="px-5 py-1 mb-3 text-white bg-red-700 rounded-lg"
          >
            Rules
          </button>
        </div>

        <div className="flex flex-col -translate-y-72 ">
          <div className="w-24 -translate-y-10 ">
            <img src={diceImage} alt="" />
          </div>
          <button
            className="px-5 py-1 mb-3 text-white bg-black rounded-lg "
            onClick={Rolldice}
          >
            RollDice
          </button>
          <button
            className="px-5 py-1 mb-3 text-white bg-black rounded-lg"
            onClick={holdscore}
          >
            Hold
          </button>
        </div>

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
    </div>
  );
};

export default Gamepage;
