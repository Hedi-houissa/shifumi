import { propsGetWinner, propsRandom, propsTwoRandom } from "./types";

const twoRandomChoose = async ({
  setLeft,
  setRight,
  setResult,
}: propsTwoRandom) => {
  // Initialize a counter variable to 0
  let counter = 0;

  // Initialize two variables to store random numbers
  let left = 0;
  let right = 0;

  // Set up a timer interval that will execute every 100 milliseconds
  let intervalId = setInterval(() => {
    left = Math.floor(Math.random() * 3) + 1;
    right = Math.floor(Math.random() * 3) + 1;
    counter++;
    setLeft(left);
    setRight(right);

    // If the counter reaches 20, clear the timer interval and determine the winner
    if (counter === 20) {
      clearInterval(intervalId);
      // Set the result
      setResult(getWinner({ left, right }));
    }
  }, 100);
};

const randomChoose = async ({ left, setRight, setResult }: propsRandom) => {
  // Initialize a counter variable to 0
  let counter = 0;

  // Initialize variable to store random number
  let right = 0;

  // Set up a timer interval that will execute every 100 milliseconds
  let intervalId = setInterval(() => {
    right = Math.floor(Math.random() * 3) + 1;
    counter++;
    setRight(right);

    // If the counter reaches 20, clear the timer interval and determine the winner
    if (counter === 20) {
      clearInterval(intervalId);
      // Set the result
      setResult(getWinner({ left, right }));
    }
  }, 100);
};

// 1. paper 2.scissors 3.rock
const getWinner = ({ left, right }: propsGetWinner) => {
  if (left === right) {
    return 0; // it's a tie
  } else if (
    (left === 1 && right === 3) ||
    (left === 2 && right === 1) ||
    (left === 3 && right === 2)
  ) {
    return 1; // left wins
  } else {
    return 2; // right wins
  }
};

export { twoRandomChoose, randomChoose, getWinner };
