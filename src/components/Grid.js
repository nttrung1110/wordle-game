import { Fragment } from "react";
import Row from "./Row";

const Grid = ({ guesses, currentGuess, turn }) => {
  return (
    <Fragment>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />;
        }
        return <Row key={i} guess={g} />;
      })}
    </Fragment>
  );
};

export default Grid;
