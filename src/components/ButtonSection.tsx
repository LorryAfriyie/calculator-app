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
    // Function holding a switch statement to change the color of the button wrapper based on the selected theme
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

    // Function to set the default theme color
    function active() {
      btnBg.current!.style.backgroundColor = "var(--clr-th1-toggle-and-key-bg)";
    }

    active();
    BgSwitch(theme);
  }, [theme]);

  // Array of objects for button's data
  const button = [
    { value: 7, text: "7", method: buttonValue, class: "numeric" },
    { value: 8, text: "8", method: buttonValue, class: "numeric" },
    { value: 9, text: "9", method: buttonValue, class: "numeric" },
    { value: "", text: "del", method: deleteValue, class: "del" },
    { value: 4, text: "4", method: buttonValue, class: "numeric" },
    { value: 5, text: "5", method: buttonValue, class: "numeric" },
    { value: 6, text: "6", method: buttonValue, class: "numeric" },
    { value: "+", text: "+", method: signHandler, class: "math-operator" },
    { value: 1, text: "1", method: buttonValue, class: "numeric" },
    { value: 2, text: "2", method: buttonValue, class: "numeric" },
    { value: 3, text: "3", method: buttonValue, class: "numeric" },
    { value: "-", text: "-", method: signHandler, class: "math-operator" },
    { value: ".", text: ".", method: commaHandler, class: "comma" },
    { value: 0, text: "0", method: buttonValue, class: "numeric" },
    { value: "/", text: "/", method: signHandler, class: "math-operator" },
    { value: "*", text: "*", method: signHandler, class: "math-operator" },
  ];

  return (
    <div className={"button-section"} ref={btnBg}>
      <div className="four-row-btn">
        {button.map((x, index) => {
          return (
            <div key={index}>
              <Button
                onClick={x.method}
                value={x.value}
                text={x.text}
                btnClass={x.class}
              />
            </div>
          );
        })}
      </div>

      <div className="fifth-row">
        <Button onClick={resetCalculator} text={"Reset"} />

        <Button onClick={equalHandler} value={"="} text={"="} />
      </div>
    </div>
  );
}
