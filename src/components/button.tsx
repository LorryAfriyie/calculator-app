import React, { useRef, useEffect } from "react";
import { useThemeContext } from "../context/ThemeContext";

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  value?: number | string;
};

export function Button({ onClick, text, value }: ButtonProps) {
  const { theme } = useThemeContext();
  const btn = useRef<HTMLButtonElement | null>(null);

  // Numeric buttons
  const buttonTheme1 = "theme-one-btn-style",
    buttonTheme2 = "theme-two-btn-style",
    buttonTheme3 = "theme-three-btn-style";

  // Delete button
  const delTheme1 = "del-theme-one",
    delTheme2 = "del-theme-two",
    delTheme3 = "del-theme-three";

  // Reset Button
  const resetTheme1 = "reset-theme-one",
    resetTheme2 = "reset-theme-two",
    resetTheme3 = "reset-theme-three";

  // Equal css classes
  const equalTheme1 = "equal-sign-theme-one",
    equalTheme2 = "equal-sign-theme-two",
    equalTheme3 = "equal-sign-theme-three";

  // Variable to hold the value type of the different buttons of the calculator
  const valueType = typeof value;

  useEffect(() => {
    // Function holding a switch statement to switch between selected theme colors
    function BtnColorSwitch(theme: string) {
      switch (theme) {
        case "one":
          if (CheckClassName(buttonTheme2)) {
            RemoveClass(buttonTheme2, delTheme2, resetTheme2, equalTheme2);
            AddClass(buttonTheme1, delTheme1, resetTheme1, equalTheme1);
          } else if (CheckClassName(buttonTheme3)) {
            RemoveClass(buttonTheme3, delTheme3, resetTheme3, equalTheme3);
            AddClass(buttonTheme1, delTheme1, resetTheme1, equalTheme1);
          } else AddClass(buttonTheme1, delTheme1, resetTheme1, equalTheme1);

          break;
        case "two":
          if (CheckClassName(buttonTheme1)) {
            RemoveClass(buttonTheme1, delTheme1, resetTheme1, equalTheme1);
            AddClass(buttonTheme2, delTheme2, resetTheme2, equalTheme2);
          } else if (CheckClassName(buttonTheme3)) {
            RemoveClass(buttonTheme3, delTheme3, resetTheme3, equalTheme3);
            AddClass(buttonTheme2, delTheme2, resetTheme2, equalTheme2);
          } else AddClass(buttonTheme2, delTheme2, resetTheme2, equalTheme2);

          break;
        case "three":
          if (CheckClassName(buttonTheme1)) {
            RemoveClass(buttonTheme1, delTheme1, resetTheme1, equalTheme1);
            AddClass(buttonTheme3, delTheme3, resetTheme3, equalTheme3);
          } else if (CheckClassName(buttonTheme2)) {
            RemoveClass(buttonTheme2, delTheme2, resetTheme2, equalTheme2);
            AddClass(buttonTheme3, delTheme3, resetTheme3, equalTheme3);
          } else AddClass(buttonTheme3, delTheme3, resetTheme3, equalTheme3);

          break;
        default:
          break;
      }
    }

    // Function to set default theme
    function activeColor() {
      AddClass(buttonTheme1, delTheme1, resetTheme1, equalTheme1);
    }

    // Set theme when theme useState is empty
    if (theme === "") activeColor();

    function CheckClassName(className: string) {
      return btn.current!.classList.contains(className) ? true : false;
    }

    function AddClass(
      className: string,
      delClassName: string,
      resetClassName: string,
      equalClassName: string
    ) {
      btn.current!.classList.add(className);

      if (text === "del") btn.current!.classList.add(delClassName);

      if (text === "Reset") btn.current!.classList.add(resetClassName);

      if (text === "=") btn.current!.classList.add(equalClassName);
    }

    function RemoveClass(
      className: string,
      delClassName: string,
      resetClassName: string,
      equalClassName: string
    ) {
      btn.current!.classList.remove(className);

      if (text === "del") btn.current!.classList.remove(delClassName);

      if (text === "Reset") btn.current!.classList.remove(resetClassName);

      if (text === "=") btn.current!.classList.remove(equalClassName);
    }

    BtnColorSwitch(theme);
  }, [theme, value, text, valueType]);

  return (
    <button onClick={onClick} value={value} ref={btn}>
      {text}
    </button>
  );
}
