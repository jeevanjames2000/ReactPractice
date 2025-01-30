import React from "react";

export default function Profile({ state, setState }) {
  console.log("data0", state);
  const { name, age } = state;
  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) =>
          setState((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <label>Age:</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setState((prev) => ({ ...prev, age: e.target.value }))}
      />
    </div>
  );
}
