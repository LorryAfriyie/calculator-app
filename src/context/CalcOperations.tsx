import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  useEffect,
} from "react";

type CalcOperationContext = {
  calc: {
    sign: string;
    num: number | string;
    res?: number | string;
  };
  setCalc: Dispatch<SetStateAction<CalcType>>;
  buttonValue: (value: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  resetCalculator: () => void;
  deleteValue: () => void;
  commaHandler: (
    value: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  signHandler: (value: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  equalHandler: (
    value: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

interface CalcType {
  sign: string;
  num: number | string;
  res?: number | string;
}

type CalcOperations = {
  children: ReactNode;
};

const CalcOperationsContext = createContext({} as CalcOperationContext);

export function useCalcOperations() {
  return useContext(CalcOperationsContext);
}

export function CalcOperationsProvider({ children }: CalcOperations) {
  const [calc, setCalc] = useState<CalcType>({
    sign: "",
    num: 0,
    res: 0,
  });

  // Add values into number state object
  function buttonValue(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const value = (e.target as HTMLButtonElement).value;

    if (calc.num.toString().length < 16) {
      setCalc({
        ...calc,
        num:
          Number(calc.num) % 1 === 0 && !calc.num.toString().includes(".")
            ? Number(calc.num + value)
            : Number(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  }

  // RESET Function to remove all values inside the array
  function resetCalculator(): void {
    setCalc({
      num: 0,
      res: 0,
      sign: "",
    });
  }

  // DELETE Function to delete value in the queue
  function deleteValue() {
    setCalc({
      ...calc,
      num: calc.num.toString().slice(0, -1),
      res: calc.res!.toString().slice(0, -1),
    });
  }

  // Add a comma to the comma next to last entered numeric value
  function commaHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const comma = (e.target as HTMLButtonElement).value;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".")
        ? calc.num + comma
        : Number(calc.num),
    });
  }

  // Hold the type of math operator selected and also return the result of entered values
  function signHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const mathSign = (e.target as HTMLButtonElement).value;

    setCalc({
      ...calc,
      sign: mathSign,
      res: !Number(calc.num)
        ? Number(calc.res)
        : !Number(calc.res)
        ? Number(calc.num)
        : calculation(Number(calc.res), Number(calc.num), calc.sign),
      num: 0,
    });
  }

  // Return the result of the values entered into the calculator
  function equalHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    if (calc.sign && calc.num) {
      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? 0
            : calculation(Number(calc.res), Number(calc.num), calc.sign),
        sign: "",
        num: 0,
      });
    }
  }

  // Do calculation based on the type of math operation selected
  const calculation = (a: number, b: number, sign: string) => {
    switch (sign) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        break;
    }
  };

  function toLocalString(num: number | string) {
    return String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
  }

  function removeSpaces(num: number | string) {
    return num.toString().replace(/\s/g, "");
  }

  useEffect(() => {
    // Set the values to zero when the states are empty
    if (calc.num === "" && calc.res === "") {
      setCalc({ num: 0, res: 0, sign: "" });
    }
  }, [calc]);

  return (
    <CalcOperationsContext.Provider
      value={{
        calc,
        setCalc,
        buttonValue,
        deleteValue,
        resetCalculator,
        commaHandler,
        signHandler,
        equalHandler,
      }}
    >
      {children}
    </CalcOperationsContext.Provider>
  );
}
