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

  // Variable to hold the value type of the different buttons of the calculator
  const valueType = typeof value;

  useEffect(() => {
    // Function holding a switch statement to switch between selected theme colors
    function BtnColorSwitch(theme: string) {
      switch (theme) {
        case "one":
          BtnColors(
            "var(--clr-th1-key-bg-ddb)",
            "var(--clr-th1-key-bg-lgo",
            "var(--clr-th1-key-sh-go)"
          );
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
          BtnColors(
            "var(--clr-th2-very-dark-grayish-yellow)",
            "var(--clr-th2-key-bg-lgy)",
            "var(--clr-th2-key-sh-dgo)"
          );
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
          BtnColors(
            "var(--clr-th3-light-yellow)",
            "var(--clr-th3-key-bg-vdv)",
            "var(--clr-th3-key-sh-dm)"
          );
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

    // Function to add theme colors to the button background and text color
    function BtnColors(btnTextColor: string, btnColor: string, shadow: string) {
      btn.current!.style.color = btnTextColor;

      if (valueType === "number") {
        btn.current!.style.backgroundColor = btnColor;
        btn.current!.style.boxShadow = "0px 3px 0px 0px " + shadow;
      }
      if (valueType === "string" && value != "=" && value != "") {
        btn.current!.style.backgroundColor = btnColor;
        btn.current!.style.boxShadow = "0px 3px 0px 0px " + shadow;
      }
    }

    // Function to set default theme
    function activeColor() {
      btn.current!.style.color = "var(--clr-th1-very-dark-grayish-blue)";

      if (valueType === "number")
        btn.current!.style.boxShadow = "0 3px 0 0 var(--clr-th1-key-sh-go)";

      if (valueType === "string" && value != "=" && value != "")
        btn.current!.style.boxShadow = "0 3px 0 0 var(--clr-th1-key-sh-go)";

      NonNumericBtnStyle(
        text,
        "var(--clr-white)",
        "var(--clr-th1-key-bg-ddb)",
        "var(--clr-th1-key-and-toggle-bg-r)"
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

    BtnColorSwitch(theme);
  }, [theme, value, text, valueType]);

  return (
    <button onClick={onClick} value={value} ref={btn}>
      {text}
    </button>
  );
}
