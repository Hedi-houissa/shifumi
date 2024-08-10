interface SeparatorProps {
  winner: boolean;
}
const Separator = ({ winner }: SeparatorProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`w-1/2 max-md:w-2/3 ${winner && "auto-zoom"}`}
    >
      <defs>
        <linearGradient
          x1="0"
          x2="1"
          y1="0"
          y2="1"
          id="sbed-electric-gradient-0"
        >
          <stop offset="0%" stopColor="#000" stopOpacity="1"></stop>
          <stop offset="100%" stopColor="#000" stopOpacity="1"></stop>
        </linearGradient>
      </defs>
      <g transform="translate(0,0)">
        <path
          d="M376 211H256V16L136 301h120v195z"
          fill="#fff"
          fillOpacity="1"
          transform="translate(0, 0) scale(1, 1) rotate(30, 250,250) skewX(0) skewY(0)"
        ></path>
      </g>
    </svg>
  );
};

export default Separator;
