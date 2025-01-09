import React, { useEffect, useRef } from "react";
import { useThemeContext } from "../context/ThemeContext";

export function ToggleSwitch() {
  // useContext
  const { theme, setTheme } = useThemeContext();

  // useRef declaration
  const activeTheme = useRef<HTMLInputElement | null>(null),
    themeLabel = useRef<HTMLParagraphElement | null>(null),
    toggleSwitch = useRef<HTMLDivElement>(null);

  const test = useRef<(HTMLElement | null)[]>([]),
    checkmark = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Function that encapsulates background theme colors and switches based on chosen theme
    function themeSwitch(calTheme: string) {
      switch (calTheme) {
        case "one":
          Colors(
            "var(--clr-th1-main-bg)",
            "var(--clr-th1-key-bg-lgo)",
            "var(--clr-th1-toggle-and-key-bg)"
          );

          if (CheckColor("label-theme-color-two", "toggle-theme-two")) {
            RemoveThemeNumberColor("label-theme-color-two", "toggle-theme-two");
            ThemeNumberColor("label-theme-color-one", "toggle-theme-one");
          } else if (
            CheckColor("label-theme-color-three", "toggle-theme-three")
          ) {
            RemoveThemeNumberColor(
              "label-theme-color-three",
              "toggle-theme-three"
            );
            ThemeNumberColor("label-theme-color-one", "toggle-theme-one");
          } else ThemeNumberColor("label-theme-color-one", "toggle-theme-one");

          break;
        case "two":
          Colors(
            "var(--clr-th2-main-bg-lg)",
            "var(--clr-th2-very-dark-grayish-yellow)",
            "var(--clr-th2-toggle-and-key-bg-gr)"
          );

          if (CheckColor("label-theme-color-one", "toggle-theme-one")) {
            RemoveThemeNumberColor("label-theme-color-one", "toggle-theme-one");
            ThemeNumberColor("label-theme-color-two", "toggle-theme-two");
          } else if (
            CheckColor("label-theme-color-three", "toggle-theme-three")
          ) {
            RemoveThemeNumberColor(
              "label-theme-color-three",
              "toggle-theme-three"
            );
            ThemeNumberColor("label-theme-color-two", "toggle-theme-two");
          } else ThemeNumberColor("label-theme-color-two", "toggle-theme-two");

          break;
        case "three":
          Colors(
            "var(--clr-th3-main-bg-vdv)",
            "var(--clr-th3-light-yellow)",
            "var(--clr-th3-toggle-and-key-and-scrn-bg-vdv)"
          );

          if (CheckColor("label-theme-color-one", "toggle-theme-one")) {
            RemoveThemeNumberColor("label-theme-color-one", "toggle-theme-one");
            ThemeNumberColor("label-theme-color-three", "toggle-theme-three");
          } else if (CheckColor("label-theme-color-two", "toggle-theme-two")) {
            RemoveThemeNumberColor("label-theme-color-two", "toggle-theme-two");
            ThemeNumberColor("label-theme-color-three", "toggle-theme-three");
          } else
            ThemeNumberColor("label-theme-color-three", "toggle-theme-three");

          break;
        default:
          break;
      }
    }

    // Function that encapsulates the first theme colors
    function active() {
      if (activeTheme.current != null) {
        activeTheme.current.checked = true;

        ThemeNumberColor("label-theme-color-one", "toggle-theme-one");

        Colors(
          "var(--clr-th1-main-bg)",
          "var(--clr-th1-key-bg-lgo)",
          "var(--clr-th1-toggle-and-key-bg)"
        );
      }
    }

    // Function to set theme colors for the body, logo and the toggle switch
    function Colors(
      bodyColor: string,
      labelColor: string,
      toggleBackground: string
    ) {
      document.body.style.backgroundColor = bodyColor;
      themeLabel.current!.style.color = labelColor;
      toggleSwitch.current!.style.backgroundColor = toggleBackground;
    }

    function ThemeNumberColor(themeClass: string, checkColor: string) {
      for (let i = 0; i < test.current.length; i++) {
        test.current[i]!.classList.add(themeClass);
        checkmark.current[i]!.classList.add(checkColor);
      }
    }

    function RemoveThemeNumberColor(themeClass: string, checkColor: string) {
      for (let i = 0; i < test.current.length; i++) {
        test.current[i]!.classList.remove(themeClass);
        checkmark.current[i]!.classList.remove(checkColor);
      }
    }

    function CheckColor(themeClass: string, checkColor: string) {
      let isColor: boolean = false;

      for (let i = 0; i < test.current.length; i++) {
        if (
          test.current[i]!.classList.contains(themeClass) &&
          checkmark.current[i]!.classList.contains(checkColor)
        )
          isColor = true;
      }
      return isColor;
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
      <p ref={themeLabel} className="theme-label">
        theme
      </p>

      <div className={"toggle-switch__switch"} ref={toggleSwitch}>
        <label htmlFor="one" className="toggle-switch__theme-switcher">
          <div className="toggle-switch__theme-label">
            <small ref={(e) => (test.current[0] = e)}>1</small>
          </div>

          <input
            type="radio"
            id="one"
            name={"toggle"}
            value={"one"}
            onChange={handleChange}
            ref={activeTheme}
          />
          <span
            className="checkmark"
            ref={(e) => (checkmark.current[0] = e)}
          ></span>
        </label>

        <label htmlFor="two" className="toggle-switch__theme-switcher">
          <div className="toggle-switch__theme-label">
            <small ref={(e) => (test.current[1] = e)}>2</small>
          </div>

          <input
            type="radio"
            id="two"
            name={"toggle"}
            value={"two"}
            onChange={handleChange}
          />
          <span
            className="checkmark"
            ref={(e) => (checkmark.current[1] = e)}
          ></span>
        </label>

        <label htmlFor="three" className="toggle-switch__theme-switcher">
          <div className="toggle-switch__theme-label">
            <small ref={(e) => (test.current[2] = e)}>3</small>
          </div>

          <input
            type="radio"
            id="three"
            name={"toggle"}
            value={"three"}
            onChange={handleChange}
          />
          <span
            className="checkmark"
            ref={(e) => (checkmark.current[2] = e)}
          ></span>
        </label>
      </div>
    </div>
  );
}
