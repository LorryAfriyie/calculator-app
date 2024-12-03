import { useMathOperations } from "../context/MathOperations.tsx";
import { useEffect, useRef } from "react";
import { Input } from "./input.tsx";

export function ScreenSection({ display }) {
  const { numbers, listOfNumbers, accValue } = useMathOperations();
  const screen = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // console.log(numbers);
    if (screen.current !== null) screen.current.value = numbers.join("");
    // if (screen.current === null) screen.current.value = String(accValue);
  }, [numbers, listOfNumbers]);

  return (
    <div className={"screen-section"}>
      <p>{numbers}</p>
      {/*<input type="text" ref={screen} />*/}
      <Input ref={screen} />
    </div>
  );
}
