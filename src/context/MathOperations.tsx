import { createContext, useContext, ReactNode } from "react";

type MathOperationsContext = {
  addition: () => void;
  subtraction: () => void;
  division: () => void;
  multiplication: () => void;
};

type MathOperations = {
  children: ReactNode;
};

const MathOperationsContext = createContext({} as MathOperationsContext);

export function useMathOperations() {
  return useContext(MathOperationsContext);
}

export function MathOperationsProvider({ children }: MathOperations) {
  function addition() {}

  function subtraction() {}

  function division() {}

  function multiplication() {}

  return (
    <MathOperationsContext.Provider
      value={{
        addition,
        subtraction,
        division,
        multiplication,
      }}
    >
      {children}
    </MathOperationsContext.Provider>
  );
}
