export function ToggleSwitch() {
  return (
    <div className="toggle-switch">
      <div className={"toggle-switch__switch"}>
        <label htmlFor="one">1</label>
        <input
          type="radio"
          className={"toggle-switch__input"}
          id={"one"}
          name={"theme"}
        />

        <label htmlFor="two">2</label>
        <input
          type="radio"
          className={"toggle-switch__input"}
          id={"two"}
          name={"theme"}
        />

        <label htmlFor="three">3</label>
        <input
          type="radio"
          className={"toggle-switch__input"}
          id={"three"}
          name={"theme"}
        />
      </div>
    </div>
  );
}
