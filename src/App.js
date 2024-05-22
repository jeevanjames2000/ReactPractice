import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Parent from "./Parent";
import Child from "./Child";
import { MyContext } from "./mycontext";
import { useContext } from "react";
import Form from "./Form/Form";
import CheckBoxes from "./Checkboxes";
import TodoPrctise from "./todoPrctise";
import StickyNotes from "./StickyNotes";
import Home from "./Home";

function App() {
  const [data, setData] = useState({
    name: "hii",
    age: "",
    students: [
      { name: "student1", age: "17" },
      {
        name: "student2",
        age: "23",
        sample: [{ name: "hello" }, { age: "90" }],
      },
    ],
  });

  const [dumm, setDumm] = useState([]);
  console.log("dumm: ", dumm);
  const filteredSamples = () => {
    const filter = data.students
      .map((item) => item.sample)
      .filter((item1) => item1);
    setDumm(filter);
  };

  console.log("filtered: ", filteredSamples);

  return (
    <MyContext.Provider value={data}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/child" element={<Child />} />
          <Route path="/stickyNotes" element={<StickyNotes />} />
          <Route path="/form" element={<Form />} />
          <Route path="/check" element={<CheckBoxes />} />
          <Route path="/newTodo" element={<TodoPrctise />} />
        </Routes>
      </Router>
      {/* <Form /> */}
    </MyContext.Provider>
  );
}

export default App;
