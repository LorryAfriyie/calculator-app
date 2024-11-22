import React from "react";

type Props = {};

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input ref={ref} {...props} />;
});
