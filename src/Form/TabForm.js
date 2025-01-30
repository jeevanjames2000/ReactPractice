import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import Intrests from "./Intrests";
import Settings from "./Settings";

export default function TabForm() {
  const tabs = [
    { name: "Profile", component: Profile },
    { name: "Intrests", component: Intrests },
    { name: "Settings", component: Settings },
  ];

  const [state, setState] = useState({
    name: "Jeevan",
    age: "24",
    intrests: ["volleyball", "basketball"],
    settings: [{ lightmode: false, notifications: false }],
    submit: false,
  });

  const [activeTab, setActiveTab] = useState(0);
  const ActiveTabComponent = tabs[activeTab].component;

  const [data, setData] = useState(null);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("formData")));
  }, [state.submit]);

  return (
    <>
      <div style={{ display: "block" }}>
        <div style={{ display: "flex", padding: "5px" }}>
          {tabs.map((item, index) => (
            <div
              style={{ padding: "5px", border: "1px solid black" }}
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
        <button onClick={() => localStorage.removeItem("formData")}>
          clear
        </button>
        <div
          style={{
            padding: "5px",
            border: "1px solid black",
            height: "100px",
            width: "500px",
          }}
        >
          <ActiveTabComponent state={state} setState={setState} />
        </div>
        <div style={{ border: "1px solid black" }}>
          <p>Form data</p>
          <div>{data?.name}</div>
          <div>{data?.age}</div>
        </div>
      </div>
    </>
  );
}
