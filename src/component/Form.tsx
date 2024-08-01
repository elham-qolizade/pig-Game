import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const player1Ref = useRef<HTMLInputElement>(null);
  const player2Ref = useRef<HTMLInputElement>(null);
  const winnerScoreRef = useRef<HTMLInputElement>(null);

  const Nextpage = () => {
    const player1 = player1Ref.current?.value;
    const player2 = player2Ref.current?.value;
    const winnerScore = winnerScoreRef.current?.value;
    navigate(
      `/Gamepage?player1=${player1}&player2=${player2}&winnerScore=${winnerScore}`
    );
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col p-10 bg-black rounded-2xl ">
        <label htmlFor="player1" className="text-white">
          Player 1
        </label>
        <input type="text" name="player1" id="player1" ref={player1Ref} />
        <label htmlFor="player2" className="text-white">
          Player 2
        </label>
        <input type="text" name="player2" id="player2" ref={player2Ref} />
        <label htmlFor="player2" className="text-white">
          winner score{" "}
        </label>
        <input
          type="number"
          id="winnerScore"
          ref={winnerScoreRef}
          placeholder="100"
        />
        <button
          className="p-2 mt-4 text-white bg-red-700 rounded-lg"
          onClick={Nextpage}
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default Form;
