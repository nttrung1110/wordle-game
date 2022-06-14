import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyup } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  });

  return (
    <div>
      <div>solution is: {solution}</div>
      <div>currentGuess is: {currentGuess}</div>
    </div>
  );
};

export default Wordle;
