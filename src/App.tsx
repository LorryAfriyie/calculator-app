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
      <p>Button Section</p>
    </div>
  );
}

export default App;
