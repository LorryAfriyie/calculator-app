import React, { useRef, useEffect } from "react";
import { useThemeContext } from "../context/ThemeContext";

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  value?: number | string;
  btnClass?: string;
};

export function Button({ onClick, text, value, btnClass }: ButtonProps) {
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

  // Variable to hold the value type of the different buttons of the calculator
  const valueType = typeof value;

  useEffect(() => {
    // Function holding a switch statement to switch between selected theme colors
    function BtnColorSwitch(theme: string) {
      switch (theme) {
        case "one":
          if (CheckClassName(buttonTheme2)) {
            RemoveClass(buttonTheme2);
            AddClass(buttonTheme1);
          } else if (CheckClassName(buttonTheme3)) {
            RemoveClass(buttonTheme3);
            AddClass(buttonTheme1);
          } else AddClass(buttonTheme1);

          NonNumericBtnStyle(
            text,
            "var(--clr-white)",
            "var(--clr-th1-key-bg-ddb)",
            "var(--clr-th1-key-and-toggle-bg-r)",
            "var(--clr-th1-key-sh-ddb)",
            "var(--clr-th1-key-bg-dr)"
          );
          break;
        case "two":
          if (CheckClassName(buttonTheme1)) {
            RemoveClass(buttonTheme1);
            AddClass(buttonTheme2);
          } else if (CheckClassName(buttonTheme3)) {
            RemoveClass(buttonTheme3);
            AddClass(buttonTheme2);
          } else AddClass(buttonTheme2);

          NonNumericBtnStyle(
            text,
            "var(--clr-white)",
            "var(--clr-th2-key-bg-dmc)",
            "var(--clr-th2-key-and-toggle-bg-o)",
            "var(--clr-th2-key-sh-vdy)",
            "var(--clr-th2-key-sh-do)"
          );
          break;
        case "three":
          if (CheckClassName(buttonTheme1)) {
            RemoveClass(buttonTheme1);
            AddClass(buttonTheme3);
          } else if (CheckClassName(buttonTheme2)) {
            RemoveClass(buttonTheme2);
            AddClass(buttonTheme3);
          } else AddClass(buttonTheme3);

          NonNumericBtnStyle(
            text,
            "var(--clr-white)",
            "var(--clr-th3-key-bg-dv)",
            "var(--clr-th3-key-and-toggle-bg-pc)",
            "var(--clr-th3-key-sh-vm)",
            "var(--clr-th3-key-sh-sc)"
          );
          break;
        default:
          break;
      }
    }

    // Function to set default theme
    function activeColor() {
      AddClass(buttonTheme1);

      if (valueType === "string" && value != "=" && value != "")
        btn.current!.style.boxShadow = "0 3px 0 0 var(--clr-th1-key-sh-go)";

      NonNumericBtnStyle(
        text,
        "var(--clr-white)",
        "var(--clr-th1-key-bg-ddb)",
        "var(--clr-th1-key-and-toggle-bg-r)",
        "var(--clr-th1-key-sh-ddb)",
        "var(--clr-th1-key-bg-dr)"
      );
    }

    // Set theme when theme useState is empty
    if (theme === "") activeColor();

    // Adding separate styles to the non numeric buttons of the calculator
    function NonNumericBtnStyle(
      text: string,
      color1: string,
      color2: string,
      equalBtnColor: string,
      firstShadow: string,
      secondShadow: string
    ) {
      if (text === "del") {
        btn.current!.style.color = color1;
        btn.current!.style.backgroundColor = color2;
        btn.current!.style.boxShadow = "0px 3px 0px 0px " + firstShadow;
      }

      if (text === "=") {
        if (theme === "three")
          btn.current!.style.color = "var(--clr-very-dark-blue)";
        else btn.current!.style.color = color1;
        btn.current!.style.backgroundColor = equalBtnColor;
        btn.current!.style.boxShadow = "0px 3px 0px 0px " + secondShadow;
      }

      if (text === "Reset") {
        btn.current!.style.color = color1;
        btn.current!.style.backgroundColor = color2;
        btn.current!.style.boxShadow = "0px 3px 0px 0px " + firstShadow;
      }
    }

    function CheckClassName(className: string) {
      return btn.current!.classList.contains(className) ? true : false;
    }

    function AddClass(className: string) {
      btn.current!.classList.add(className);
    }

    function RemoveClass(className: string) {
      btn.current!.classList.remove(className);
    }

    BtnColorSwitch(theme);
  }, [theme, value, text, valueType]);

  return (
    <button onClick={onClick} value={value} ref={btn} className={btnClass}>
      {text}
    </button>
  );
}
