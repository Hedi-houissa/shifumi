import Separator from "./icons/Separator";
import Players from "./Players";
interface ViewProps {
  leftPlayer: number;
  rightPlayer: number;
  winner: number;
}
const View = ({ leftPlayer, rightPlayer, winner }: ViewProps) => {
  return (
    <div className="border rounded-xl shadow-lg p-5 bg-gray-100/40 min-w-60 min-h-48 flex justify-around items-center max-md:flex-col ">
      {/* Render the Players component for the left player */}
      <Players image={leftPlayer} numPlayer={1} winner={winner === 1} />
      {/* Render the Separator component */}
      <Separator winner={winner === 0} />
      {/* Render the Players component for the right player */}
      <Players image={rightPlayer} numPlayer={2} winner={winner === 2} />
    </div>
  );
};

export default View;
