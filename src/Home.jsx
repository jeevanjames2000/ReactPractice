import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
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
      </div>
    </>
  );
};

export default Home;
