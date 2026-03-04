import { useState } from "react";
import "./App.css";
import LemonadeStand from "./components/LemonadeStand";
import StandInfo from "./components/StandInfo";
import Stats from "./components/Stats";

function App() {
  const [lemonCount, setLemonCount] = useState(0);
  const [moneyCount, setMoneyCount] = useState(5);
  const [lemonadeSold, setLemonadeSold] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);

  const handleBuyLemons = () => {
  if (moneyCount >= 1) {
    setLemonCount((prev) => prev + 1);
    setMoneyCount((prev) => prev - 1);
  }
};

const handleSellLemonade = () => {
  if (lemonCount >= 2) {
    setLemonCount((prev) => prev - 2);
    setMoneyCount((prev) => prev + 3);
    setLemonadeSold((prev) => prev + 1);
    setTotalProfit((prev) => prev + 3);
  }
};

  return (
    <>
      <LemonadeStand>
          <h1>MY FIRST LEMONADE STAND</h1>
          <StandInfo>
            <div className="button-row">
              <button
                onClick={handleBuyLemons}
                disabled={moneyCount < 1}
              >
                BUY LEMONS {lemonCount}
              </button>
              <button
                onClick={handleSellLemonade}
                disabled={lemonCount < 2}
              >   
                SELL LEMONADE
              </button>
            </div>
            <div className="statsRow">
              <div className="statsContainer">
                <Stats label="Lemons" value={lemonCount} />
                <Stats label="Money" value={moneyCount} ismoney />
              </div>
              <div className="statsContainer">
                <Stats label="Lemonade sold" value={lemonadeSold} />
                <Stats label="Profit" value={totalProfit} ismoney />
              </div>
            </div>
          </StandInfo>
      </LemonadeStand>
    </>
  );
}

export default App;
