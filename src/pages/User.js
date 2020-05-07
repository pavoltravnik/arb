import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../App";

export default function User() {
  const context = useContext(MyContext);
  const { state } = context;
  let { id } = useParams();
  return (
    <div>
      <h3>User {id}</h3>
      <h2>{state.a}</h2>
    </div>
  );
}
