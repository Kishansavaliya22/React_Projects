import { useEffect, useState } from "react";

interface IUseCurrencyInfo {
  currency: string;
}

const useCurrencyInfo = ({ currency }: IUseCurrencyInfo) => {
  const [data, setData] = useState<{ [key: string]: never }>({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
};

export default useCurrencyInfo;
