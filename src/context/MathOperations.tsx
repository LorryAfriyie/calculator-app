import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type MathOperationsContext = {
  buttonValue: (value: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  resetCalculator: () => void;
  deleteValue: () => void;
  numbers: number[];
  listOfNumbers: number[];
  addition: () => void;
  subtraction: () => void;
  accValue: number;
};

type MathOperations = {
  children: ReactNode;
};

const MathOperationsContext = createContext({} as MathOperationsContext);

export function useMathOperations() {
  return useContext(MathOperationsContext);
}

export function MathOperationsProvider({ children }: MathOperations) {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [lastNumber, setLastNumber] = useState<number>(0);
  const [listOfNumbers, setListOfNumbers] = useState<number[]>([]);
  const [accValue, setAccValue] = useState<number>(0);

  // Add values into the array
  function buttonValue(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setNumbers([...numbers, parseInt((e.target as HTMLButtonElement).value)]);
    /*if (numbers.length > 0) {
      const values = numbers.reduce((acc, x) => {
        return parseInt(String(acc) + String(x));
      });

      setListOfNumbers([...listOfNumbers, values]);
      console.log(listOfNumbers);
    }*/
  }

  // RESET Function to remove all values inside the array
  function resetCalculator(): void {
    setNumbers([]);
  }

  // DELETE Function to delete value in the queue
  function deleteValue() {
    setNumbers(numbers.filter((x) => x !== lastNumber));
  }

  function addition() {
    const values = numbers.reduce((acc, x) => {
      return parseInt(String(acc) + String(x));
    });

    setAccValue((prev) => values + prev);
    setListOfNumbers([...listOfNumbers, values]);
    setNumbers([]);
  }

  function subtraction() {
    const values = numbers.reduce((acc, x) => {
      return parseInt(String(acc) + String(x));
    });

    if (accValue === 0) setAccValue(values);
    else setAccValue((prev) => prev - values);

    setListOfNumbers([...listOfNumbers, values]);
    setNumbers([]);
  }

  useEffect(() => {
    setLastNumber(numbers[numbers.length - 1]);
    console.log(accValue);
  }, [numbers, accValue]);

  return (
    <MathOperationsContext.Provider
      value={{
        buttonValue,
        resetCalculator,
        deleteValue,
        numbers,
        listOfNumbers,
        addition,
        subtraction,
        accValue,
      }}
    >
      {children}
    </MathOperationsContext.Provider>
  );
}
