import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ColorDropdown from "./ReactChallenges/ColorDropdown";
// import {useFetch} from "./hooks/useFetch";
import TabForm from "./Form/TabForm.js";

const Home = () => {
  const navigate = useNavigate();

  // const [time, setTime] = useState(0);
  // // console.log("time: ", time);
  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     setTime((prev) => prev + 1);
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  // useFetch("")

  return (
    <>
      <div
        style={{
          margin: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "50px",
            backgroundColor: "lightblue",
            width: "200px",
            cursor: "pointer",
          }}
          onClick={() => navigate("cursor")}
        >
          <h4 style={{ textAlign: "center" }}>CursorDrag </h4>
        </div>
        <div
          style={{
            height: "50px",
            backgroundColor: "lightblue",
            width: "200px",
            cursor: "pointer",
          }}
          onClick={() => navigate("stickyNotes")}
        >
          <h4 style={{ textAlign: "center" }}>StickyNotes App</h4>
        </div>
        <div
          style={{
            height: "50px",
            backgroundColor: "lightblue",
            width: "200px",
            cursor: "pointer",
          }}
          onClick={() => navigate("newTodo")}
        >
          <h4 style={{ textAlign: "center" }}>Todo App</h4>
        </div>
        <div
          style={{
            height: "50px",
            backgroundColor: "lightblue",
            width: "200px",
            cursor: "pointer",
          }}
          onClick={() => navigate("check")}
        >
          <h4 style={{ textAlign: "center" }}>CheckBoxes</h4>
        </div>
        <div
          style={{
            height: "50px",
            backgroundColor: "lightblue",
            width: "200px",
            cursor: "pointer",
          }}
          onClick={() => navigate("form")}
        >
          <h4 style={{ textAlign: "center" }}>Form LocalStorage</h4>
        </div>

        {/* <div>{time}</div> */}
        <ColorDropdown />
      </div>
      <div>
        <TabForm />
      </div>
    </>
  );
};

export default Home;
