import React, { createContext, useContext, useState, useEffect } from "react";

type MathOperationsContext = {
  buttonValue: (value: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  resetCalculator: () => void;
  deleteValue: () => void;
  concatNumericValues: () => void;
  showNumbers: () => React.ReactNode;
};

const MathOperationsContext = createContext({} as MathOperationsContext);

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

  function buttonValue(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setNumbers([...numbers, parseInt((e.target as HTMLButtonElement).value)]);
  }

  function showNumbers() {
    return numbers;
  }

  function resetCalculator() {
    setNumbers([]);
  }

  function deleteValue() {
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
        deleteValue,
        concatNumericValues,
        showNumbers,
      }}
    >
      {children}
    </MathOperationsContext.Provider>
  );
}
