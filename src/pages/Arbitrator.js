import React from "react";
import { useParams } from "react-router-dom";

export default function Arbitrator() {
  let { id } = useParams();
  return (
    <div>
      <h3>Arbitrator {id}</h3>
    </div>
  );
}
