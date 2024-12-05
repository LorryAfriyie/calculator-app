import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type CalcOperationContext = {
  calc: {
    sign: string;
    num: number | string;
    res?: number;
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
  res?: number;
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

    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === "0"
          ? "0"
          : Number(calc.num) % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value,
      res: !calc.sign ? 0 : calc.res,
    });
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
    });
  }

  // Add a comma to the comma next to last entered numeric value
  function commaHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const comma = (e.target as HTMLButtonElement).value;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + comma : calc.num,
    });
  }

  function signHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const mathSign = (e.target as HTMLButtonElement).value;

    setCalc({
      ...calc,
      sign: mathSign,
      res: !Number(calc.res) && Number(calc.num) ? Number(calc.num) : calc.res,
      num: 0,
    });
  }

  function equalHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    const equalSign = (e.target as HTMLButtonElement).value;
    if (calc.sign && calc.num) {
      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? 0
            : calculation(Number(calc.num), Number(calc.res), equalSign),
        sign: "",
        num: 0,
      });
    }
  }

  const calculation = (a: number, b: number, sign: string) => {
    switch (sign) {
      case "+":
        console.log("addition");
        return a + b;
      case "-":
        console.log("subtract");
        return a - b;
      case "*":
        console.log("multiply");
        return a * b;
      case "/":
        console.log("divide");
        return a / b;
      default:
        break;
    }
  };

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
