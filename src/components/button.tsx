import React, { useRef, useEffect } from "react";
import { useThemeContext } from "../context/ThemeContext";

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  value?: number | string;
};

export function Button({ onClick, text, value }: ButtonProps) {
  const { theme } = useThemeContext();
  const btnText = useRef<HTMLParagraphElement | null>(null),
    btn = useRef<HTMLButtonElement | null>(null);

  const i = typeof value;

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
      btnText.current!.style.color = btnTextColor;
      if (i === "number") btn.current!.style.backgroundColor = btnColor;
      if (i === "string" && value != "=")
        btn.current!.style.backgroundColor = btnColor;
    }

    function activeColor() {
      btnText.current!.style.color = "var(--clr-th1-very-dark-grayish-blue)";
    }

    activeColor();

    console.log(typeof value + " " + text);

    BtnColorSwitch(theme);
  }, [theme, value, text, i]);

  return (
    <button onClick={onClick} value={value} ref={btn}>
      <p ref={btnText}>{text}</p>
    </button>
  );
}
