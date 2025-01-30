import React from "react";

export default function Intrests({ state, setState }) {
  const { intrests } = state;
  return (
    <div>
      {intrests.map((item, indx) => (
        <div key={indx}>{item}</div>
      ))}
    </div>
  );
}
