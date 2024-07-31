import React from "react";

const Roles: React.FC = () => {
  return (
    <div className="bg-black">
      <ul className="flex flex-col items-center justify-center gap-4 py-9">
        <h2 className="text-red-600">Roules</h2>
        <li className="text-white">
          The game has 2 players, playing in rounds
        </li>
        <li className="text-white">
          In each turn, a player rolls a dice as many times as he whishesEach
          result get added to his ROUND score.
        </li>
        <li className="text-white">
          BUT, if the player rolls a 1, all his ROUND score gets lost. After
          that, it's the next player's turn.
        </li>
        <li className="text-white">
          The player can choose to 'Hold', which means that his ROUND score gets
          added to his GLOBAL score. After that, it's the next player's turn.
        </li>
        <li className="text-white">
          The first player to reach 100 points on GLOBAL score wins the game.
        </li>
      </ul>
    </div>
  );
};

export default Roles;
