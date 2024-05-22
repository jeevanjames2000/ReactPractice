import React, { useState } from "react";

export default function Child() {
  const data = localStorage.getItem("data");
  console.log("data", JSON.parse(data));
  const ss = JSON.parse(data);

  const [dumdata, setdumData] = useState({
    name: "",
    age: "",
  });
  console.log("dumdata: ", dumdata);
  const handleChange = () => {
    setdumData({ ...dumdata, name: "text" });
  };
  return (
    <>
      <button
        onClick={() => {
          setdumData({ ...dumdata, age: "23", name: "sss" });
        }}
      >
        x
      </button>
      {ss.age}
      {ss.name}
      {ss.num}
    </>
  );
}
