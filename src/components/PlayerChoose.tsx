import React from "react";
import { imagesList } from "../utils/Listes";
interface PlayerChoosePropos {
  setLeftPlayer: React.Dispatch<React.SetStateAction<number>>;
}
const PlayerChoose = ({ setLeftPlayer }: PlayerChoosePropos) => {
  return (
    <div className="w-full md:w-4/5 xl:w-3/5 2xl:w-2/5  flex justify-start max-md:justify-center gap-3 ">
      {/* Map over the imagesList array and render an image for each item */}
      {imagesList.map(
        (_, index: number) =>
          index > 0 && (
            <img
              key={index}
              src={imagesList[index]}
              alt=""
              className="w-16 bg-white rounded-full p-2 cursor-pointer hover:shadow-2xl hover:scale-110"
              onClick={() => {
                setLeftPlayer(index);
              }}
            />
          )
      )}
    </div>
  );
};

export default PlayerChoose;
