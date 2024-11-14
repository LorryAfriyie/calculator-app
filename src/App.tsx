import { ToggleSwitch } from "./components/SwitchToggle.tsx";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className={"app"}>
      <div className="calculator-container">
        <HeaderSection />
        <ScreenSection />
        <ButtonSection />
      </div>
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
  return (
    <div className={"screen-section"}>
      <input type="text" />
    </div>
  );
}
function ButtonSection() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [lastNumber, setLastNumber] = useState<number>(0);
  const [listOfNumbers, setListOfNumbers] = useState<number[]>([]);

  // Add values into the array
  function buttonValue(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    //console.log((e.target as HTMLButtonElement).value);
    setNumbers([...numbers, parseInt((e.target as HTMLButtonElement).value)]);
  }

  // RESET Function to remove all values inside the array
  function resetCalculator() {
    setNumbers([]);
  }

  // DELETE Function to delete value in the queue
  function deleteValue() {
    setNumbers(numbers.filter((x) => x !== lastNumber));
  }

  function concatValues() {
    const i = numbers.reduce((acc, x) => {
      return parseInt(String(acc) + String(x));
    });

    setListOfNumbers([...listOfNumbers, i]);
    setNumbers([]);
  }

  function test() {
    /* const i = numbers.reduce((acc, x) => {
      return parseInt(String(acc) + String(x));
    });



    const sum = numbers.reduce((acc, currentValue) => {
      return acc + currentValue;
    });

    console.log(i);
    console.log(sum);*/

    if (numbers.length > 0) {
      console.log("test");
      concatValues();
    }

    console.log(listOfNumbers);
  }

  useEffect(() => {
    setLastNumber(numbers[numbers.length - 1]);
  }, [numbers]);

  return (
    <div className={"button-section"}>
      <p>{numbers}</p>
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
        <button value={"add"} onClick={concatValues}>
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
        <button value={"output"} onClick={test}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
