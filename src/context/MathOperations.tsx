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
  // Numeric values that were selected are added into the array
  const [numbers, setNumbers] = useState<number[]>([]);

  // Used to store the last value of the numbers array
  const [lastNumber, setLastNumber] = useState<number>(0);

  // ???
  const [listOfNumbers, setListOfNumbers] = useState<number[]>([]);

  // Used to store calculation of two or more numeric values
  const [accValue, setAccValue] = useState<number>(0);

  // Used to store the type of calculation operation to be used
  const [operation, setOperation] = useState<string>("");

  // Used to temporarily store the last entered value(s) from the numbers array
  const [value, setValue] = useState<number>(0);

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
    setOperation("add");

    if (accValue === 0) setAccValue(value);
    else setAccValue((prev) => value + prev);
    setListOfNumbers([...listOfNumbers, value]);
    setNumbers([]);
  }

  function subtraction() {
    setOperation("subtract");

    /* if (accValue === 0) setAccValue(values);
    else setAccValue((prev) => prev - values);*/

    setListOfNumbers([...listOfNumbers, value]);
    setNumbers([]);
  }

  function division() {
    setOperation("divide");

    /* if (accValue === 0) setAccValue(values);
    else setAccValue((prev) => prev / values);*/

    setListOfNumbers([...listOfNumbers, value]);
    setNumbers([]);
  }

  function multiplication() {
    setOperation("multiply");

    if (accValue === 0) setAccValue(value);
    else setAccValue((prev) => prev * value);

    setListOfNumbers([...listOfNumbers, value]);
    setNumbers([]);
  }

  function calculationResult() {
    switch (operation) {
      case "add":
        setAccValue((prev) => value + prev);
        console.log("adding");
        break;
      case "subtract":
        setAccValue((prev) => prev - value);
        console.log("Subtracting");
        break;
      case "divide":
        setAccValue((prev) => prev / value);
        console.log("dividing");
        break;
      case "multiply":
        setAccValue((prev) => prev * value);
        console.log("multiplying");
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    setValue(
      numbers.reduce((acc, x) => {
        return parseInt(String(acc) + String(x));
      }, 0)
    );

    console.log(`List of numbers: ${listOfNumbers}`);
    console.log(`Numbers: ${numbers}`);

    setLastNumber(numbers[numbers.length - 1]);
    console.log(`Acc value: ${accValue}`);
  }, [numbers, accValue, listOfNumbers, value]);

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
