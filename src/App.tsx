import { ToggleSwitch } from "./components/SwitchToggle.tsx";
import {
  MathOperationsProvider,
  useMathOperations,
} from "./context/MathOperations.tsx";
import React, { useEffect, useState, useRef } from "react";

function App() {
  return (
    <div className={"app"}>
      <MathOperationsProvider>
        <div className="calculator-container">
          <HeaderSection />
          <ScreenSection />
          <ButtonSection />
        </div>
      </MathOperationsProvider>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className={"header-section"}>
      <p>calc</p>
      <ToggleSwitch />
    </div>
  );
}

function ScreenSection() {
  const { showNumbers } = useMathOperations();
  const screen = useRef<HTMLInputElement>(null);

  useEffect(() => {
    screen.current.value = showNumbers();
  }, []);

  return (
    <div className={"screen-section"}>
      <p>{showNumbers()}</p>
      <input type="text" ref={screen} />
    </div>
  );
}

function ButtonSection() {
  const { buttonValue, resetCalculator, deleteValue, concatNumericValues } =
    useMathOperations();

  return (
    <div className={"button-section"}>
      <div className="first-row">
        <button value={7} onClick={buttonValue}>
          7
        </button>
        <button value={8} onClick={buttonValue}>
          8
        </button>
        <button value={9} onClick={buttonValue}>
          9
        </button>
        <button value={"del"} onClick={deleteValue}>
          DEL
        </button>
      </div>

      <div className="second-row">
        <button value={4} onClick={buttonValue}>
          4
        </button>
        <button value={5} onClick={buttonValue}>
          5
        </button>
        <button value={6} onClick={buttonValue}>
          6
        </button>
        <button value={"add"} onClick={concatNumericValues}>
          +
        </button>
      </div>

      <div className="third-row">
        <button value={1} onClick={buttonValue}>
          1
        </button>
        <button value={2} onClick={buttonValue}>
          2
        </button>
        <button value={3} onClick={buttonValue}>
          3
        </button>
        <button value={"subtract"}>-</button>
      </div>

      <div className="fourth-row">
        <button>.</button>
        <button value={0} onClick={buttonValue}>
          0
        </button>
        <button value={"divide"}>/</button>
        <button value={"multiply"}>x</button>
      </div>

      <div className="fifth-row">
        <button value={"reset"} onClick={resetCalculator}>
          RESET
        </button>
        <button value={"output"}>=</button>
      </div>
    </div>
  );
}

export default App;
