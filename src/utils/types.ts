type propsTwoRandom = {
  setLeft: React.Dispatch<React.SetStateAction<number>>;
  setRight: React.Dispatch<React.SetStateAction<number>>;
  setResult: React.Dispatch<React.SetStateAction<number>>;
};

type propsRandom = {
  left: number;
  setRight: React.Dispatch<React.SetStateAction<number>>;
  setResult: React.Dispatch<React.SetStateAction<number>>;
};

type propsGetWinner = {
  left: number;
  right: number;
};

export type { propsTwoRandom, propsRandom, propsGetWinner };
