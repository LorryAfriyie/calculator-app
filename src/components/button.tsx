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
          NonNumericBtnStyle(
            text,
            "var(--clr-white)",
            "var(--clr-th1-key-bg-ddb)",
            "var(--clr-th1-key-and-toggle-bg-r)"
          );
          break;
        case "two":
          BtnColors(
            "var(--clr-th2-very-dark-grayish-yellow)",
            "var(--clr-th2-key-bg-lgy)"
          );
          NonNumericBtnStyle(
            text,
            "var(--clr-white)",
            "var(--clr-th2-key-bg-dmc)",
            "var(--clr-th2-key-and-toggle-bg-o)"
          );
          break;
        case "three":
          BtnColors("var(--clr-th3-light-yellow)", "var(--clr-th3-key-bg-vdv)");
          NonNumericBtnStyle(
            text,
            "var(--clr-white)",
            "var(--clr-th3-key-bg-dv)",
            "var(--clr-th3-key-and-toggle-bg-pc)"
          );
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
      NonNumericBtnStyle(
        text,
        "var(--clr-white)",
        "var(--clr-th1-key-bg-ddb)",
        "var(--clr-th1-key-and-toggle-bg-r)"
      );
    }

    if (theme === "") activeColor();

    function NonNumericBtnStyle(
      text: string,
      color1: string,
      color2: string,
      equalBtnColor: string
    ) {
      if (text === "del") {
        btn.current!.style.color = color1;
        btn.current!.style.backgroundColor = color2;
      }

      if (text === "=") {
        if (theme === "three")
          btn.current!.style.color = "var(--clr-very-dark-blue)";
        else btn.current!.style.color = color1;
        btn.current!.style.backgroundColor = equalBtnColor;
      }

      if (text === "Reset") {
        btn.current!.style.color = color1;
        btn.current!.style.backgroundColor = color2;
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
