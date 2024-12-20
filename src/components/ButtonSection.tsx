import { useRef, useEffect } from "react";
import { useCalcOperations } from "../context/CalcOperations.tsx";
import { useThemeContext } from "../context/ThemeContext";
import { Button } from "./button.tsx";

export function ButtonSection() {
  const {
    buttonValue,
    resetCalculator,
    deleteValue,
    commaHandler,
    signHandler,
    equalHandler,
  } = useCalcOperations();

  const { theme } = useThemeContext();

  const btnBg = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function BgSwitch(theme: string) {
      switch (theme) {
        case "one":
          btnBg.current!.style.backgroundColor =
            "var(--clr-th1-toggle-and-key-bg)";
          break;
        case "two":
          btnBg.current!.style.backgroundColor =
            "var(--clr-th2-toggle-and-key-bg-gr)";
          break;
        case "three":
          btnBg.current!.style.backgroundColor =
            "var( --clr-th3-toggle-and-key-and-scrn-bg-vdv)";
          break;
        default:
          break;
      }
    }

    function active() {
      btnBg.current!.style.backgroundColor = "var(--clr-th1-toggle-and-key-bg)";
    }

    active();
    BgSwitch(theme);
  }, [theme]);

  return (
    <div className={"button-section"} ref={btnBg}>
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

        <Button onClick={signHandler} value={"+"} text={"+"} />
      </div>

      <div className="third-row">
        <Button onClick={buttonValue} value={1} text={"1"} />

        <Button onClick={buttonValue} value={2} text={"2"} />

        <Button onClick={buttonValue} value={3} text={"3"} />

        <Button onClick={signHandler} value={"-"} text={"-"} />
      </div>

      <div className="fourth-row">
        <Button onClick={commaHandler} text={"."} value={"."} />

        <Button onClick={buttonValue} value={0} text={"0"} />

        <Button onClick={signHandler} value={"/"} text={"/"} />

        <Button onClick={signHandler} value={"*"} text={"x"} />
      </div>

      <div className="fifth-row">
        <Button onClick={resetCalculator} text={"Reset"} />

        <Button onClick={equalHandler} value={"="} text={"="} />
      </div>
    </div>
  );
}
