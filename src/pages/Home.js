import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../App";

export default function Home() {
  const context = useContext(MyContext);
  const { state, dispatch } = context;
  let { id } = useParams();
  //   console.log(count);

  async function add() {
    console.log("action add");
    dispatch({ type: "ADD", payload: state.a + 1 });
  }
  async function del() {
    dispatch({ type: "DELETE", payload: state.a - 1 });
  }
  console.log(state.a);
  return (
    <div>
      <h3>Home {id}</h3>
      <h2>{state.a}</h2>
      <button onClick={() => add()}>Increment</button>
      <button onClick={() => del()}>Decrement</button>
    </div>
  );
}
