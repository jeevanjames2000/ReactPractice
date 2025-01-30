import { useContext, useState } from "react";
import { MyContext } from "../mycontext";

const ColorDropdown = () => {
  const colors = { red: "red", green: "green", black: "black" };
  const [color, setColor] = useState(colors.red);
  const { sam, setSam } = useContext(MyContext);
  console.log("data: ", sam);
  console.log("color: ", color);
  const handleColor = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
  };
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
    setSam(e.target.value);
  };
  const [check, setCheck] = useState([{ name: "jeevan", male: true }]);
  console.log("check: ", check);
  const handleCheck = (e) => {
    setCheck((prev) => ({ ...prev, male: e.target.checked }));
  };
  const mockWeatherData = {
    "New York": {
      temperature: "22°C",
      humidity: "56%",
      windSpeed: "15 km/h",
    },
    "Los Angeles": {
      temperature: "27°C",
      humidity: "45%",
      windSpeed: "10 km/h",
    },
    London: {
      temperature: "15°C",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
  };

  return (
    <>
      <select value={color} onChange={handleColor}>
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
        <option value={"black"}>Black</option>
      </select>
      <div
        style={{
          backgroundColor: `${color}`,
          height: "2rem",
          width: "5rem",
          //   margin: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {color}
      </div>
      <input value={text} onChange={onChange} />
      {text}
      <input
        type="checkbox"
        value={check.male}
        onChange={handleCheck}
        checked={check.male}
      />
    </>
  );
};
export default ColorDropdown;
