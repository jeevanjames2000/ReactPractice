import React, { useEffect, useState } from "react";

function Form() {
  const [data, setData] = useState([]);
  console.log("data: ", data);

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleChange = () => {
    localStorage.setItem("data", JSON.stringify(data));
    const alertData = localStorage.getItem("data");
    alert(alertData);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          margin: "auto",
          width: "50%",
        }}
      >
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={data.name}
          onChange={handleSubmit}
        />
        <label>PhoneNumber</label>
        <input
          name="number"
          type="number"
          value={data.number}
          onChange={handleSubmit}
        />
        <label>Age</label>
        <input
          name="age"
          type="text"
          value={data.age}
          onChange={handleSubmit}
        />
        <button type="submit" onClick={handleChange}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Form;
