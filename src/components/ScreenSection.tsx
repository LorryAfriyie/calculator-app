import { useRef } from "react";
import { useCalcOperations } from "../context/CalcOperations.tsx";

export function ScreenSection() {
  const { calc } = useCalcOperations();
  const screen = useRef<HTMLInputElement | null>(null);

  return (
    <div className={"screen-section"}>
      <p className={"value-display"}>{calc.num ? calc.num : calc.res}</p>
    </div>
  );
}
