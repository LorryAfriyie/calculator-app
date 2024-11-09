import { ToggleSwitch } from "./components/SwitchToggle.tsx";
import React from "react";

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
  function buttonValue(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log((e.target as HTMLButtonElement).value);
  }

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
        <button>DEL</button>
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
        <button>+</button>
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
        <button>-</button>
      </div>

      <div className="fourth-row">
        <button>.</button>
        <button value={0} onClick={buttonValue}>
          0
        </button>
        <button>/</button>
        <button>x</button>
      </div>

      <div className="fifth-row">
        <button>RESET</button>
        <button>=</button>
      </div>
    </div>
  );
}

export default App;
