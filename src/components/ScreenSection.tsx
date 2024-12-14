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

  useEffect(() => {
    // Function that encapsulates screen and text theme colors and switches based on chosen theme
    function themeSwitch(theme: string) {
      switch (theme) {
        case "one":
          screen.current!.style.backgroundColor = "var(--clr-th1-scrn-bg)";
          text.current!.style.color = "var(--clr-white)";
          break;
        case "two":
          screen.current!.style.backgroundColor = "var(--clr-th2-scrn-bg-vlg)";
          text.current!.style.color = "var(--clr-th2-very-dark-grayish-yellow)";
          break;
        case "three":
          screen.current!.style.backgroundColor =
            "var(--clr-th3-toggle-and-key-and-scrn-bg-vdv)";
          text.current!.style.color = "var(--clr-th3-light-yellow)";
          break;
      }
    }

    // Function that encapsulates the first theme colors
    function active() {
      screen.current!.style.backgroundColor = "var(--clr-th1-scrn-bg)";
      text.current!.style.color = "var(--clr-white)";
    }

    // Theme switch function
    themeSwitch(theme);

    // Set the first theme as the default theme on launch
    if (!theme) {
      active();
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
