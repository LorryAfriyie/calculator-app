import React, { createContext, useContext, useState, useEffect } from "react";

const MathOperationsContext = createContext({});

export function useMathOperations() {
  return useContext(MathOperationsContext);
}

export function MathOperationsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [lastNumber, setLastNumber] = useState<number>(0);
  const [listOfNumbers, setListOfNumbers] = useState<number[]>([]);

  function buttonValue(value: number) {
    setNumbers([...numbers, value]);
  }

  function resetCalculator() {
    setNumbers([]);
  }

  function deleteCalculator() {
    setNumbers(numbers.filter((x) => x !== lastNumber));
  }

  function concatNumericValues() {
    const values = numbers.reduce((acc, x) => {
      return parseInt(String(acc) + String(x));
    });

    setListOfNumbers([...listOfNumbers, values]);
    setNumbers([]);
  }

  useEffect(() => {
    setLastNumber(numbers[numbers.length - 1]);
  }, [numbers]);

  return (
    <MathOperationsContext.Provider
      value={{
        buttonValue,
        resetCalculator,
        deleteCalculator,
        concatNumericValues,
        numbers,
      }}
    >
      {children}
    </MathOperationsContext.Provider>
  );
}
