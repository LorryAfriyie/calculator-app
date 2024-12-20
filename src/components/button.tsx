import React, { useRef, useEffect } from "react";
import { useThemeContext } from "../context/ThemeContext";

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  value?: number | string;
};

export function Button({ onClick, text, value }: ButtonProps) {
  const { theme } = useThemeContext();
  const btnText = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    function BtnColorSwitch(theme: string) {
      switch (theme) {
        case "one":
          btnText.current!.style.color = "var(--clr-th1-key-bg-ddb)";
          break;
        case "two":
          btnText.current!.style.color =
            "var(--clr-th2-very-dark-grayish-yellow)";
          break;
        case "three":
          btnText.current!.style.color = "var(--clr-th3-light-yellow)";
          break;
        default:
          break;
      }
    }

    function activeColor() {
      btnText.current!.style.color = "var(--clr-th1-very-dark-grayish-blue)";
    }

    activeColor();

    BtnColorSwitch(theme);
  }, [theme]);

  return (
    <button onClick={onClick} value={value}>
      <p ref={btnText}>{text}</p>
    </button>
  );
}
