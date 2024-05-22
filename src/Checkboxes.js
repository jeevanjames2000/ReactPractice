import React, { useState } from "react";

function CheckBoxes() {
  const [isChecked, setIsChecked] = useState({
    all: false,
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    console.log("name, checked: ", name, checked);
    if (name === "all") {
      setIsChecked({
        all: checked,
        checkbox1: checked,
        checkbox2: checked,
        checkbox3: checked,
        checkbox4: checked,
        checkbox5: checked,
      });
    } else {
      setIsChecked((prevState) => ({
        ...prevState,
        [name]: checked,
        all: false,
      }));
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="all"
          checked={isChecked.all}
          onChange={handleCheckboxChange}
        />
        All
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox1"
          checked={isChecked.checkbox1}
          onChange={handleCheckboxChange}
        />
        Checkbox 1
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox2"
          checked={isChecked.checkbox2}
          onChange={handleCheckboxChange}
        />
        Checkbox 2
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox3"
          checked={isChecked.checkbox3}
          onChange={handleCheckboxChange}
        />
        Checkbox 3
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox4"
          checked={isChecked.checkbox4}
          onChange={handleCheckboxChange}
        />
        Checkbox 4
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox5"
          checked={isChecked.checkbox5}
          onChange={handleCheckboxChange}
        />
        Checkbox 5
      </label>
    </div>
  );
}

export default CheckBoxes;
