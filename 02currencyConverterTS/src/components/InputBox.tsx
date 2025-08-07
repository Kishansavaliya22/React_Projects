import { useId } from "react";

interface IInputBox {
  labelName: string;
  amount: number;
  onAmountChange(e: number): void;
  onCurrencyChange(e: string): void;
  amountDisable?: boolean;
  currencyOptions: string[];
  selectCurrency: string;
}

const InputBox = ({
  labelName,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
}: IInputBox) => {
  // const [currency, setCurrency] = useState("usd")

  const amountInputId = useId();

  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="flex flex-col w-1/2">
        <label
          className="text-black/40 mb-2 inline-block"
          htmlFor={amountInputId}
        >
          {labelName}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Enter your Amount"
          id={amountInputId}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisable}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
