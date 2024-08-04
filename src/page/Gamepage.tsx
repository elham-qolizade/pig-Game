import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/appcontext";
import Roles from "./Roles";
import dice1 from "../assets/dice1.png";
import dice2 from "../assets/dice2.png";
import dice3 from "../assets/dice3.png";
import dice4 from "../assets/dice4.png";
import dice5 from "../assets/dice5.png";
import dice6 from "../assets/dice6.png";
import winimage from "../assets/winner.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const GamePage: React.FC = () => {
  const [showRules, setShowRules] = useState(false);
  const [diceImage, setDiceImage] = useState<string>(diceImages[0]);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [CurrentPlayer, setCurrentPlayer] = useState(
    Math.random() < 0.5 ? 1 : 2
  );
  const [currentRoundScore, setCurrentRoundScore] = useState(0);
  const [winner, setWinner] = useState<number>();
  const [player1Color, setPlayer1Color] = useState("white");
  const [player2Color, setPlayer2Color] = useState("white");
  const [wincolor, setWincolor] = useState(winimage);
  const { player1, player2, winScore } = useAppContext();

  useEffect(() => {
    setPlayer1Color(CurrentPlayer === 1 ? "#CCCCCC" : "white");
    setPlayer2Color(CurrentPlayer === 2 ? "#CCCCCC" : "white");
  }, [CurrentPlayer]);

  const toggleRulesModal = () => {
    setShowRules(!showRules);
  };

  const rollDice = () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    setDiceImage(diceImages[diceRoll - 1]);

    if (diceRoll === 1) {
      setCurrentRoundScore(0);
      togglePlayer();
      return;
    }
    setCurrentRoundScore((c) => c + diceRoll);
  };

  const holdScore = () => {
    const gameOver = checkGameOver();
    if (gameOver) return;

    const total =
      (CurrentPlayer === 1 ? player1Score : player2Score) + currentRoundScore;

    if (total >= winScore) {
      setWinner(CurrentPlayer);
      return;
    }

    if (CurrentPlayer === 1) {
      setPlayer1Score((s) => s + currentRoundScore);
    } else {
      setPlayer2Score((s) => s + currentRoundScore);
    }
    togglePlayer();

    setCurrentRoundScore(0);
  };

  const Newgame = () => {
    setCurrentPlayer(Math.random() < 0.5 ? 1 : 2);
    setCurrentRoundScore(0);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setWinner(undefined);
  };

  const togglePlayer = () => {
    setCurrentPlayer(CurrentPlayer === 1 ? 2 : 1);
    setPlayer1Color(CurrentPlayer === 1 ? "#CCCCCC" : "white");
    setPlayer2Color(CurrentPlayer === 2 ? "#CCCCCC" : "white");
  };

  const checkGameOver = () => {
    if (player1Score >= winScore || player2Score >= winScore) {
      setWinner(player1Score >= winScore ? 1 : 2);
      setWincolor(winimage);
      return true;
    }
    return false;
  };

  const play1background = {
    backgroundColor: player1Color,
    backgroundImage: winner === 1 ? `url(${wincolor})` : player1Color,
    backgroundSize: "cover",
  };
  const play2background = {
    backgroundColor: player2Color,
    backgroundImage: winner === 2 ? `url(${wincolor})` : player1Color,
    backgroundSize: "cover",
  };

  return (
    <div className="container flex flex-col  ">
      <div className=" py-2 flex items-center gap-80 justify-around">
        <div className="text-center bg-white rounded-md pig-game">
          <h1 className="text-2xl p-3 font-medium text-center text-orange">
            PIG GAME
          </h1>
        </div>

        <button
          onClick={toggleRulesModal}
          className="px-6 py-4 mb-3 font-medium text-black bg-white rounded-lg"
        >
          Rules
        </button>
      </div>

      <div className=" flex items-center justify-center  lg:flex-row">
        <div
          className="flex flex-col items-center justify-center gap-16 py-28 lg:rounded-s-2xl px-44"
          style={play1background}
        >
          <p className="text-5xl text-black">{player1}</p>
          <h2 className="text-red-500 text-7xl text-red"> {player1Score}</h2>
          <div className="p-6 mb-2 text-xl text-center text-white rounded-lg current-box">
            <p>current</p>
            {CurrentPlayer === 1 ? currentRoundScore : 0}
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-16 px-44 py-28 lg:rounded-e-2xl "
          style={play2background}
        >
          <p className="text-5xl text-black">{player2}</p>
          <h2 className="text-red-500 text-7xl text-red"> {player2Score}</h2>
          <div className="p-6 mb-2 text-xl text-center text-white rounded-lg current-box ">
            <p>current</p>
            {CurrentPlayer === 2 ? currentRoundScore : 0}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center -translate-y-96 ">
        <button
          onClick={Newgame}
          className="py-3 mb-3 text-white -translate-y-32  rounded-lg px-7 new-game-btn"
        >
          New Game
        </button>
        <div className="w-24 -translate-y-16 ">
          <img src={diceImage} alt="" />
        </div>
        <button
          className="py-3 mb-3 text-white rounded-lg px-7 bg-orange "
          onClick={rollDice}
        >
          RollDice
        </button>
        <button
          className="p-3 mb-3 text-white rounded-lg bg-orange"
          onClick={holdScore}
        >
          Hold
        </button>
      </div>
      {showRules && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="p-8 bg-white rounded-lg max-w-xl">
            <Roles />
            <button
              onClick={toggleRulesModal}
              className="px-4 py-2 mt-4  text-white close-btn rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;
