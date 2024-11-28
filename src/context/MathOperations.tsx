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
  division: () => void;
  multiplication: () => void;
  calculationResult: () => void;
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
  const [operation, setOperation] = useState<string>("");

  let values = 0;

  // Add values into the array
  function buttonValue(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setNumbers([...numbers, parseInt((e.target as HTMLButtonElement).value)]);
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
    values = numbers.reduce((acc, x) => {
      return parseInt(String(acc) + String(x));
    });

    setOperation("add");

    /* if (accValue === 0) setAccValue(values);
    else setAccValue((prev) => values + prev);*/

    setListOfNumbers([...listOfNumbers, values]);
    setNumbers([]);
  }

  function subtraction() {
    values = numbers.reduce((acc, x) => {
      return parseInt(String(acc) + String(x));
    });

    setOperation("subtract");

    /* if (accValue === 0) setAccValue(values);
    else setAccValue((prev) => prev - values);*/

    setListOfNumbers([...listOfNumbers, values]);
    setNumbers([]);
  }

  function division() {
    values = numbers.reduce((acc, x) => {
      return parseInt(String(acc) + String(x));
    });

    setOperation("divide");

    /* if (accValue === 0) setAccValue(values);
    else setAccValue((prev) => prev / values);*/

    setListOfNumbers([...listOfNumbers, values]);
    setNumbers([]);
  }

  function multiplication() {
    values = numbers.reduce((acc, x) => {
      return parseInt(String(acc) + String(x));
    });

    setOperation("multiply");

    /* if (accValue === 0) setAccValue(values);
    else setAccValue((prev) => prev * values);*/

    setListOfNumbers([...listOfNumbers, values]);
    setNumbers([]);
  }

  function calculationResult() {
    switch (operation) {
      case "add":
        if (accValue === 0) setAccValue(values);
        else setAccValue((prev) => values + prev);
        console.log("adding");
        break;
      case "subtract":
        if (accValue === 0) setAccValue(values);
        else setAccValue((prev) => prev - values);
        console.log("Subtracting");
        break;
      case "divide":
        if (accValue === 0) setAccValue(values);
        else setAccValue((prev) => prev / values);
        console.log("dividing");
        break;
      case "multiplication":
        if (accValue === 0) setAccValue(values);
        else setAccValue((prev) => prev * values);
        console.log("multiplying");
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    setLastNumber(numbers[numbers.length - 1]);

    if (accValue != 0) console.log(accValue);
  }, [numbers, accValue, listOfNumbers]);

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
        division,
        multiplication,
        calculationResult,
        accValue,
      }}
    >
      {children}
    </MathOperationsContext.Provider>
  );
}
