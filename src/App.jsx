import { useState } from "react";
import "./App.css";

function App() {
  const [lemonCount, setLemonCount] = useState(0);
  const [moneyCount, setMoneyCount] = useState(5);

  return (
    <>
      <div className="lemonadeStand">
        <div className="standContent">
          <h1>MY FIRST LEMONADE STAND</h1>
          <div className="card">
            <button
              onClick={() =>
                setLemonCount(
                  (lemonCount) => lemonCount + 1,
                  setMoneyCount((moneyCount) => moneyCount - 1),
                )
              }
              disabled={moneyCount < 1}
            >
              BUY LEMONS {lemonCount}
            </button>
            <button
              onClick={() =>
                setMoneyCount(
                  (moneyCount) => moneyCount + 3,
                  setLemonCount((lemonCount) => lemonCount - 2),
                )
              }
              disabled={lemonCount < 2}
            >
              SELL LEMONADE
            </button>
            <p>Cash: ${moneyCount.toFixed(2)}</p>
            <p>Lemons: {lemonCount}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
