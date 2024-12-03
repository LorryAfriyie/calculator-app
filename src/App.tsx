import { MathOperationsProvider } from "./context/MathOperations.tsx";
import { useState } from "react";

import { HeaderSection } from "./components/HeaderSection.tsx";
import { ScreenSection } from "./components/ScreenSection.tsx";
import { ButtonSection } from "./components/ButtonSection.tsx";

function App() {
  const [calc, setCalc] = useState<{ sign: string; num: number; res: number }>({
    sign: "",
    num: 0,
    res: 0,
  });
  return (
    <div className={"app"}>
      <MathOperationsProvider>
        <div className="calculator-container">
          <HeaderSection />
          <ScreenSection display={calc.num ? calc.num : calc.res} />
          <ButtonSection />
        </div>
      </MathOperationsProvider>
    </div>
  );
}

export default App;
