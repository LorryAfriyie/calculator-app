import { ToggleSwitch } from "./SwitchToggle.tsx";
import { useThemeContext } from "../context/ThemeContext.tsx";
import { useEffect, useRef } from "react";

export function HeaderSection() {
  // useContext
  const { theme } = useThemeContext();

  // useRef declarations
  const logo = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    // Function that encapsulates logo and toggle switch theme colors and switches based on chosen theme
    function themeSwitch(theme: string) {
      switch (theme) {
        case "one":
          logo.current!.style.color = "var(--clr-th1-key-bg-lgo)";
          break;
        case "two":
          logo.current!.style.color = "var(--clr-th2-very-dark-grayish-yellow)";
          break;
        case "three":
          logo.current!.style.color = "var(--clr-th3-light-yellow)";
          break;
        default:
          break;
      }
    }

    // Function that encapsulates the first theme colors
    function active() {
      logo.current!.style.color = "var(--clr-th1-key-bg-lgo)";
    }

    // Theme switch function
    themeSwitch(theme);

    // Set the first theme as the default theme on launch
    if (theme === "") active();
  }, [theme]);
  return (
    <div className={"header-section"}>
      <p ref={logo}>calc</p>
      <ToggleSwitch />
    </div>
  );
}
