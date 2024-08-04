import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appcontext";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const { player1, player2, winScore, setPlayer1, setPlayer2, setWinScore } =
    useAppContext();

  const Nextpage = () => {
    navigate(`/Gamepage`);
  };

  return (
    <div className="flex items-center justify-center mt-4 ">
      <div className="flex flex-col  p-10 bg-white rounded-2xl ">
        <h1 className="text-center  pb-2 text-orange font-medium text-lg">
          PIG GAME
        </h1>
        <label htmlFor="player1" className="text-black">
          Player 1
        </label>
        <input
          className="bg-gray"
          type="text"
          name="player1"
          id="player1"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />
        <label htmlFor="player2" className="text-black">
          Player 2
        </label>
        <input
          className="bg-gray"
          type="text"
          name="player2"
          id="player2"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />
        <label htmlFor="player2" className="text-black">
          Winner Score
        </label>
        <input
          className="bg-gray ps-2"
          type="number"
          id="winnerScore"
          value={winScore}
          placeholder="100"
          onChange={(e) => setWinScore(parseInt(e.target.value))}
        />
        <button
          className="p-2 mt-4 start-btn bg-red-700 rounded-lg"
          onClick={Nextpage}
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default Form;
