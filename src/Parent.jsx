import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./mycontext";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";

export default function Parent() {
  const data = useContext(MyContext);
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata.entries());
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
    dispatch(addTodo("New TExt"));
    navigate("/child");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="text" name="age" />
        <input type="text" name="num" />
        <input type="submit" />
      </form>
    </>
  );
}
