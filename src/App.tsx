import { ToggleSwitch } from "./components/SwitchToggle.tsx";

function App() {
  return (
    <div className={"app"}>
      <HeaderSection />
      <ScreenSection />
      <ButtonSection />
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
      <p>Screen Display</p>
    </div>
  );
}
function ButtonSection() {
  return (
    <div className={"button-section"}>
      <div className="first-row">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>DEL</button>
      </div>

      <div className="second-row">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
      </div>

      <div className="third-row">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
      </div>

      <div className="fourth-row">
        <button>.</button>
        <button>0</button>
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
