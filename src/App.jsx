import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(0);
    setResult(0);
  };

  const convert = () => {
    setResult(amount * currencyInfo[to]);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-pattern bg-cover bg-no-repeat bg-center bg-origin-border">
      <div className="border-2 bg-white/10 backdrop-blur-sm p-5 rounded-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="flex flex-col gap-y-4 relative">
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
              currencyOptions={currencyOptions}
              selectCurrency={from}
            />
            <button
              className="bg-cyan-600 text-white px-4 py-1.5 rounded-md absolute font-medium top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-cyan-700"
              onClick={swap}
            >
              Swap
            </button>
            <InputBox
              label="To"
              amount={result}
              onAmountChange={(amount) => setResult(amount)}
              onCurrencyChange={(currency) => setTo(currency)}
              currencyOptions={currencyOptions}
              selectCurrency={to}
              amountDisable
              className="bg-green-500/25 text-green-700"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 mt-6 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700"
          >{`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}</button>
        </form>
      </div>
    </div>
  );
}

export default App;
