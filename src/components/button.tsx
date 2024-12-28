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

  const valueType = typeof value;

  useEffect(() => {
    function BtnColorSwitch(theme: string) {
      switch (theme) {
        case "one":
          BtnColors("var(--clr-th1-key-bg-ddb)", "var(--clr-th1-key-bg-lgo");
          break;
        case "two":
          BtnColors(
            "var(--clr-th2-very-dark-grayish-yellow)",
            "var(--clr-th2-key-bg-lgy)"
          );
          break;
        case "three":
          BtnColors("var(--clr-th3-light-yellow)", "var(--clr-th3-key-bg-vdv)");
          break;
        default:
          break;
      }
    }

    function BtnColors(btnTextColor: string, btnColor: string) {
      btn.current!.style.color = btnTextColor;

      if (valueType === "number") btn.current!.style.backgroundColor = btnColor;
      if (valueType === "string" && value != "=")
        btn.current!.style.backgroundColor = btnColor;
    }

    function activeColor() {
      btn.current!.style.color = "var(--clr-th1-very-dark-grayish-blue)";
    }

    if (theme === "") activeColor();

    if (text === "del") {
      btn.current!.style.color = "var(--clr-white)";
      btn.current!.style.backgroundColor = "var(--clr-th1-key-bg-ddb)";
    }

    if (text === "=") {
      btn.current!.style.color = "var(--clr-white)";
      btn.current!.style.backgroundColor = "var(--clr-th1-key-and-toggle-bg-r)";
    }

    if (text === "Reset") {
      btn.current!.style.color = "var(--clr-white)";
      btn.current!.style.backgroundColor = "var(--clr-th1-key-bg-ddb)";
    }

    BtnColorSwitch(theme);
  }, [theme, value, text, valueType]);

  return (
    <button onClick={onClick} value={value} ref={btn}>
      {text}
    </button>
  );
}
