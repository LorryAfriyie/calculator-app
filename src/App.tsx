import { MathOperationsProvider } from "./context/MathOperations.tsx";
import { CalcOperationsProvider } from "./context/CalcOperations.tsx";

import { HeaderSection } from "./components/HeaderSection.tsx";
import { ScreenSection } from "./components/ScreenSection.tsx";
import { ButtonSection } from "./components/ButtonSection.tsx";

function App() {
  return (
    <div className={"app"}>
      <CalcOperationsProvider>
        <MathOperationsProvider>
          <div className="calculator-container">
            <HeaderSection />
            <ScreenSection />
            <ButtonSection />
          </div>
        </MathOperationsProvider>
      </CalcOperationsProvider>
    </div>
  );
}

export default App;
