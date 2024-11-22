import { ToggleSwitch } from "./components/SwitchToggle.tsx";
import {
  MathOperationsProvider,
  useMathOperations,
} from "./context/MathOperations.tsx";
import { Button } from "./components/button.tsx";
import { Input } from "./components/input.tsx";
import { useEffect, useRef } from "react";

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
  const { numbers } = useMathOperations();
  const screen = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    console.log(numbers);
    if (screen.current !== null) screen.current.value = numbers.join("");
  }, [numbers]);

  return (
    <div className={"screen-section"}>
      <p>{numbers}</p>
      {/*<input type="text" ref={screen} />*/}
      <Input ref={screen} />
    </div>
  );
}

function ButtonSection() {
  const { buttonValue, resetCalculator, deleteValue, concatNumericValues } =
    useMathOperations();

  return (
    <div className={"button-section"}>
      <div className="first-row">
        <Button onClick={buttonValue} value={7} text={"7"} />

        <Button onClick={buttonValue} value={8} text={"8"} />

        <Button onClick={buttonValue} value={9} text={"9"} />

        <Button onClick={deleteValue} text={"del"} />
      </div>

      <div className="second-row">
        <Button onClick={buttonValue} value={4} text={"4"} />

        <Button onClick={buttonValue} value={5} text={"5"} />

        <Button onClick={buttonValue} value={6} text={"6"} />

        <Button onClick={concatNumericValues} text={"+"} />
      </div>

      <div className="third-row">
        <Button onClick={buttonValue} value={1} text={"1"} />

        <Button onClick={buttonValue} value={2} text={"2"} />

        <Button onClick={buttonValue} value={3} text={"3"} />

        <Button text={"-"} />
      </div>

      <div className="fourth-row">
        <Button text={"."} />

        <Button onClick={buttonValue} value={0} text={"0"} />

        <Button text={"/"} />

        <Button text={"x"} />
      </div>

      <div className="fifth-row">
        <Button onClick={resetCalculator} text={"Reset"} />

        <Button text={"="} />
      </div>
    </div>
  );
}

export default App;
