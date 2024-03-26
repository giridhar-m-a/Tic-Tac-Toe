const Log = ({ turn, PLAYER }) => {
  return (
    <ol id="log">
      {turn.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {`${PLAYER[turn.player]} selected  ${turn.square.row}, ${
            turn.square.col
          }`}
          {console.log(turn.player)}
        </li>
      ))}
    </ol>
  );
};

export default Log;
