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

  const [isInitialRender, setIsInitialRender] = useState<boolean>(false);

  // Add values into number state object
  function buttonValue(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const value = (e.target as HTMLButtonElement).value;

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          Number(removeSpaces(calc.num)) % 1 === 0 &&
          !calc.num.toString().includes(".")
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
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
      num: calc.num != 0 ? calc.num.toString().slice(0, -1) : 0,
      res: calc.res != 0 ? calc.res!.toString().slice(0, -1) : 0,
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
      res: !calc.num
        ? calc.res
        : !calc.res
        ? calc.num
        : toLocaleString(
            calculation(Number(calc.res), Number(calc.num), calc.sign)
          ),
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
            : toLocaleString(
                calculation(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
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

  // Remove commas for calculation purposes
  const removeSpaces = (value?: string | number) =>
    value!.toString().replace(/,/g, "");

  // Add commas in the thousand mark
  const toLocaleString = (value?: string | number) =>
    String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    // IF-state code block to prevent re-render loop
    if (isInitialRender) {
      // Set the values to zero when the states are empty
      if (calc.num === "" && calc.res === "") {
        setCalc({ num: 0, res: 0, sign: "" });
      }

      if (calc.res?.toString().length === 4)
        setCalc({ res: Number(removeSpaces(calc.res)), sign: "", num: 0 });

      if (calc.res?.toString().length === 5)
        setCalc({
          res: toLocaleString(Number(removeSpaces(calc.res))),
          sign: "",
          num: 0,
        });

      if (calc.res?.toString().length === 6)
        setCalc({
          res: toLocaleString(Number(removeSpaces(calc.res))),
          sign: "",
          num: 0,
        });

      setIsInitialRender(false);
    }
  }, [calc, isInitialRender]);

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
