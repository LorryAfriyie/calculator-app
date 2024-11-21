import React from "react";

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  value?: number;
};

export function Button({ onClick, text, value }: ButtonProps) {
  return (
    <button onClick={onClick} value={value}>
      {text}
    </button>
  );
}
