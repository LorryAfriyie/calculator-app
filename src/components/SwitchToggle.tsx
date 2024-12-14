import React, { useEffect, useRef } from "react";
import { useThemeContext } from "../context/ThemeContext";

export function ToggleSwitch() {
  // useContext
  const { theme, setTheme } = useThemeContext();

  // useRef declaration
  const activeTheme = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Function that encapsulates background theme colors and switches based on chosen theme
    function themeSwitch(calTheme: string) {
      switch (calTheme) {
        case "one":
          document.body.style.backgroundColor = "var(--clr-th1-main-bg)";
          break;
        case "two":
          document.body.style.backgroundColor = "var(--clr-th2-main-bg-lg)";
          break;
        case "three":
          document.body.style.backgroundColor = "var(--clr-th3-main-bg-vdv)";
          break;
        default:
          break;
      }
    }

    // Function that encapsulates the first theme colors
    function active() {
      if (activeTheme.current != null) {
        activeTheme.current.checked = true;
        document.body.style.backgroundColor = "var(--clr-th1-main-bg)";
      }
    }

    // Theme switch function
    themeSwitch(theme);

    // Set the first theme as the default theme on launch
    if (!theme) active();
  }, [theme]);

  // Handle toggle switch changes and stores value into setTheme
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTheme(e.target.value);
  }

  return (
    <div className="toggle-switch">
      <div className={"toggle-switch__switch"}>
        <label htmlFor="one" className="toggle-switch__theme-switcher">
          <div className="toggle-switch__theme-label">
            <small>1</small>
          </div>

          <input
            type="radio"
            id="one"
            name={"toggle"}
            value={"one"}
            onChange={handleChange}
            ref={activeTheme}
          />
          <span className="checkmark"></span>
        </label>

        <label htmlFor="two" className="toggle-switch__theme-switcher">
          <div className="toggle-switch__theme-label">
            <small>2</small>
          </div>

          <input
            type="radio"
            id="two"
            name={"toggle"}
            value={"two"}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
        </label>

        <label htmlFor="three" className="toggle-switch__theme-switcher">
          <div className="toggle-switch__theme-label">
            <small>3</small>
          </div>

          <input
            type="radio"
            id="three"
            name={"toggle"}
            value={"three"}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
}
