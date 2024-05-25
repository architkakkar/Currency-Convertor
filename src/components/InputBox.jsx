import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const inputLabelId = useId();

  return (
    <div className="flex bg-white p-3 rounded-lg text-sm">
      <div className="w-1/2">
        <label
          htmlFor={inputLabelId}
          className="text-black/60 mb-2 inline-block font-medium"
        >
          {label}
        </label>
        <input
          type="input"
          value={amount}
          className={`outline-none w-full bg-gray-100 py-1.5 rounded-lg px-2 ${className}`}
          id={inputLabelId}
          placeholder="Amount"
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <label htmlFor="currency-type" className="text-black/60 mb-2 w-full font-medium">
          Currency Type
        </label>
        <select
          id="currency-type"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="rounded-lg p-1 bg-gray-100 cursor-pointer outline-none border border-black py-1.5 uppercase"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
