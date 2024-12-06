import { CalcOperationsProvider } from "./context/CalcOperations.tsx";
import { HeaderSection } from "./components/HeaderSection.tsx";
import { ScreenSection } from "./components/ScreenSection.tsx";
import { ButtonSection } from "./components/ButtonSection.tsx";

function App() {
  return (
    <div className={"app"}>
      <CalcOperationsProvider>
        <div className="calculator-container">
          <HeaderSection />
          <ScreenSection />
          <ButtonSection />
        </div>
      </CalcOperationsProvider>
    </div>
  );
}

export default App;
