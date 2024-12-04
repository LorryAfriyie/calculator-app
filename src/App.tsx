import { MathOperationsProvider } from "./context/MathOperations.tsx";
import {
  CalcOperationsProvider,
  useCalcOperations,
} from "./context/CalcOperations.tsx";

import { HeaderSection } from "./components/HeaderSection.tsx";
import { ScreenSection } from "./components/ScreenSection.tsx";
import { ButtonSection } from "./components/ButtonSection.tsx";

function App() {
  const { calc } = useCalcOperations();
  return (
    <div className={"app"}>
      <CalcOperationsProvider>
        <MathOperationsProvider>
          <div className="calculator-container">
            <HeaderSection />
            <ScreenSection display={calc.num ? calc.num : calc.res} />
            <ButtonSection />
          </div>
        </MathOperationsProvider>
      </CalcOperationsProvider>
    </div>
  );
}

export default App;
