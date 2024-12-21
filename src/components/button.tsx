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
          btnText.current!.style.color = "var(--clr-th1-key-bg-ddb)";
          if (i === "number")
            btn.current!.style.backgroundColor = "var(--clr-th1-key-bg-lgo)";
          if (i === "string" && value != "=")
            btn.current!.style.backgroundColor = "var(--clr-th1-key-bg-lgo)";
          break;
        case "two":
          btnText.current!.style.color =
            "var(--clr-th2-very-dark-grayish-yellow)";
          if (i === "number")
            btn.current!.style.backgroundColor = "var(--clr-th2-key-bg-lgy)";
          if (i === "string" && value != "=")
            btn.current!.style.backgroundColor = "var(--clr-th2-key-bg-lgy)";
          break;
        case "three":
          btnText.current!.style.color = "var(--clr-th3-light-yellow)";
          if (i === "number")
            btn.current!.style.backgroundColor = "var(--clr-th3-key-bg-vdv)";
          if (i === "string" && value != "=")
            btn.current!.style.backgroundColor = "var(--clr-th3-key-bg-vdv)";
          break;
        default:
          break;
      }
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
