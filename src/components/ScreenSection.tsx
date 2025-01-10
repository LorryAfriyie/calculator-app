import { useRef, useEffect } from "react";
import { useCalcOperations } from "../context/CalcOperations.tsx";
import { useThemeContext } from "../context/ThemeContext.tsx";

export function ScreenSection() {
  // useContext
  const { calc } = useCalcOperations();
  const { theme } = useThemeContext();

  // useRef declarations
  const screen = useRef<HTMLInputElement | null>(null),
    text = useRef<HTMLParagraphElement | null>(null);

  function format(num: number | string) {
    return Number(num).toLocaleString();
  }

  useEffect(() => {
    // Function that encapsulates screen and text theme colors and switches based on chosen theme
    function themeSwitch(theme: string) {
      switch (theme) {
        case "one":
          ScreenColors("var(--clr-th1-scrn-bg)", "var(--clr-white)");
          break;
        case "two":
          ScreenColors(
            "var(--clr-th2-scrn-bg-vlg)",
            "var(--clr-th2-very-dark-grayish-yellow)"
          );
          break;
        case "three":
          ScreenColors(
            "var(--clr-th3-toggle-and-key-and-scrn-bg-vdv)",
            "var(--clr-th3-light-yellow)"
          );
          break;
      }
    }

    // Function to change the styling of the calculator screen based on the selected theme
    function ScreenColors(screenBackground: string, textColor: string) {
      screen.current!.style.backgroundColor = screenBackground;
      text.current!.style.color = textColor;
    }

    // Theme switch function
    themeSwitch(theme);

    // Set the first theme as the default theme on launch
    if (!theme) {
      ScreenColors("var(--clr-th1-scrn-bg)", "var(--clr-white)");
    }
  });

  return (
    <div className={"screen-section"} ref={screen}>
      <p className={"value-display"} ref={text}>
        {calc.num ? calc.num : calc.res}
      </p>
    </div>
  );
}
