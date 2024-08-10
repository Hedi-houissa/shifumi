import React from "react";
import Loading from "./Loading";

interface PreferToPlayProps {
  StartPaying: () => void;
  result: number;
  start: boolean;
  setManuelUse: React.Dispatch<React.SetStateAction<number>>;
  manuelUse: number;
  left: number;
}

const PreferToPlay = ({
  StartPaying,
  result,
  start,
  setManuelUse,
  manuelUse,
  left,
}: PreferToPlayProps) => {
  return (
    <div>
      {manuelUse === -1 ? (
        // If manuelUse is -1, display a choice between Manuel play and Auto play
        <div className="flex gap-10">
          <button
            type="button"
            onClick={() => setManuelUse(1)}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full gap-2 flex items-center "
          >
            Manuel play
          </button>
          <button
            type="button"
            onClick={() => setManuelUse(0)}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full gap-2 flex items-center "
          >
            Auto play
          </button>
        </div>
      ) : (
        // If manuelUse is 1, display a button to start the game
        (left > 0 || manuelUse === 0) && (
          <button
            type="button"
            onClick={StartPaying}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full gap-2 flex items-center "
          >
            {result === -1 ? (
              start ? (
                <Loading />
              ) : (
                <span>Start </span>
              )
            ) : (
              <span> Retry</span>
            )}
            <span>Playing</span>
          </button>
        )
      )}
    </div>
  );
};

export default PreferToPlay;
