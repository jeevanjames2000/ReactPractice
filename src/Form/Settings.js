import React from "react";

export default function Settings({ state, setState }) {
  console.log("data0", state);
  const { settings, submit } = state;
  const handleSubmit = () => {
    setState((prev) => ({ ...prev, submit: true }));
    localStorage.setItem("formData", JSON.stringify(state));
  };
  return (
    <>
      <div style={{ padding: "10px" }}>
        <label style={{ color: "black" }}>Light mode</label>
        <input
          value={settings.lightmode}
          type="checkbox"
          checked={settings.lightmode}
          onChange={() =>
            setState((prev) => ({ ...prev, lightmode: !prev.lightmode }))
          }
        />
      </div>
      <button onClick={handleSubmit}>submit</button>
    </>
  );
}
