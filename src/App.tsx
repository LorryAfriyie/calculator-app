import { CalcOperationsProvider } from "./context/CalcOperations.tsx";
import { ThemeChangeProvider } from "./context/ThemeContext.tsx";
import { HeaderSection } from "./components/HeaderSection.tsx";
import { ScreenSection } from "./components/ScreenSection.tsx";
import { ButtonSection } from "./components/ButtonSection.tsx";

function App() {
  return (
    <div className={"app"}>
      <CalcOperationsProvider>
        <ThemeChangeProvider>
          <div className="calculator-container">
            <HeaderSection />
            <ScreenSection />
            <ButtonSection />
          </div>
        </ThemeChangeProvider>
      </CalcOperationsProvider>
    </div>
  );
}

export default App;
