import React from "react";

const Roles: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div>
        <h2 className="font-bold text-xl">Rules</h2>
      </div>
      <ul className="list-disc py-3 px-3 flex gap-7 flex-col">
        <li> The game has 2 players, playing in rounds</li>
        <li>
          {" "}
          In each turn, a player rolls a dice as many times as he whishes. Each
          result get added to his ROUND score.{" "}
        </li>
        <li>
          {" "}
          BUT, if the player rolls a 1, all his ROUND score gets lost. After
          that, it's the next player's turn.{" "}
        </li>
        <li>
          {" "}
          The player can choose to 'Hold', which means that his ROUND score gets
          added to his GLOBAL score. After that, it's the next player's turn.{" "}
        </li>
        <li>
          {" "}
          The first player to reach 100 points on GLOBAL score wins the game.{" "}
        </li>
      </ul>
    </div>
  );
};

export default Roles;
