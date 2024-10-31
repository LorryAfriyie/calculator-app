export function ToggleSwitch() {
  return (
    <div className="toggle-switch">
      <div className={"toggle-switch__switch"}>
        <label htmlFor="one" className="toggle-switch__theme-switcher">
          <input type="radio" id="one" name={"toggle"} />
          <span className="checkmark"></span>
        </label>

        <label htmlFor="two" className="toggle-switch__theme-switcher">
          <input type="radio" id="two" name={"toggle"} />
          <span className="checkmark"></span>
        </label>

        <label htmlFor="three" className="toggle-switch__theme-switcher">
          <input type="radio" id="three" name={"toggle"} />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
}
