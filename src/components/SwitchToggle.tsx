import React, { useEffect, useState } from "react";

export function ToggleSwitch() {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    switch (theme) {
      case "one":
        //document.body.style.backgroundColor = "blue";
        console.log("1");
        break;
      case "two":
        // document.body.style.backgroundColor = "red";
        console.log("2");
        break;
      case "three":
        //document.body.style.backgroundColor = "green";
        console.log("3");
        break;
      default:
        break;
    }
  }, [theme]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTheme(e.target.value);
  }

  return (
    <div className="toggle-switch">
      <div className={"toggle-switch__switch"}>
        <label htmlFor="one" className="toggle-switch__theme-switcher">
          <div className="toggle-switch__theme-label">
            <small>1</small>
          </div>

          <input
            type="radio"
            id="one"
            name={"toggle"}
            value={"one"}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
        </label>

        <label htmlFor="two" className="toggle-switch__theme-switcher">
          <div className="toggle-switch__theme-label">
            <small>2</small>
          </div>

          <input
            type="radio"
            id="two"
            name={"toggle"}
            value={"two"}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
        </label>

        <label htmlFor="three" className="toggle-switch__theme-switcher">
          <div className="toggle-switch__theme-label">
            <small>3</small>
          </div>

          <input
            type="radio"
            id="three"
            name={"toggle"}
            value={"three"}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
}
