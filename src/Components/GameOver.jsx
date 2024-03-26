const GameOver = ({ winner, rematch }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} Won</p>}
      {!winner && <p>Its A Draw</p>}
      <p>
        <button onClick={rematch}>Rematch</button>
      </p>
    </div>
  );
};

export default GameOver;
