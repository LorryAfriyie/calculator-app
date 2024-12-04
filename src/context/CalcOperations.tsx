import { createContext, ReactNode, useContext, useState } from "react";

interface CalcType {
  sign: string;
  num: number;
  res: number;
}

type CalcOperationContext = {};

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

  return (
    <CalcOperationsContext.Provider value={{ calc, setCalc }}>
      {children}
    </CalcOperationsContext.Provider>
  );
}
