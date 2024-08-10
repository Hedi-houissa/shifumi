import React from "react";
import { imagesList } from "../utils/Listes";
interface PlayersProps {
  image: number;
  numPlayer: number;
  winner: boolean;
}
const Players = ({
  image = 0,
  numPlayer = 0,
  winner = false,
}: PlayersProps) => {
  return (
    <div className=" w-fit flex flex-col justify-center items-center relative">
      <div className="text-4xl text-white font-bold "> Player {numPlayer}</div>
      <img src={imagesList[image]} alt="" className="w-full max-md:w-1/2" />
      {/* If there is a winner, display a "Winner" message */}
      {winner && (
        <div className="text-6xl max-md:text-5xl text-red-600 font-bold jumping-text absolute -bottom-6">
          {" "}
          Winner
        </div>
      )}{" "}
    </div>
  );
};

export default Players;
