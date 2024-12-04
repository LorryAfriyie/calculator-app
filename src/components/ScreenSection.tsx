import { useMathOperations } from "../context/MathOperations.tsx";
import { useEffect, useRef } from "react";

interface ScreenSectionProps {
  display?: number;
}

export function ScreenSection({ display }: ScreenSectionProps) {
  const { numbers } = useMathOperations();
  const screen = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (screen.current !== null) screen.current.value = numbers.join("");
  }, [numbers]);

  return (
    <div className={"screen-section"}>
      <p className={"value-display"}>{display}</p>
    </div>
  );
}
