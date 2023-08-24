function Calc() {
  return (
    <div className="calculator">
      <Results />
      <div className="buttons">
        <ul className="button-rows">
          <li>A/C</li>
          <li>+/-</li>
          <li>%</li>
          <li>/</li>
        </ul>
        <ul className="button-rows">
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>x</li>
        </ul>
        <ul className="button-rows">
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>-</li>
        </ul>
        <ul className="button-rows">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>+</li>
        </ul>
        <ul className="button-rows last-button-rows">
          <li className="zero">0</li>
          <li className="point">.</li>
          <li className="equals">=</li>
        </ul>
      </div>
    </div>
  );
}

const Results = () => (
  <span className="results-display">0</span>
);

export default Calc;
