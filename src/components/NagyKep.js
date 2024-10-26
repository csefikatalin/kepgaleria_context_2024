import React, { useContext } from "react";
import "./Nagykep.css";
import { KepContext } from "../context/KepContext";

function NagyKep(props) {
  const { jobb, bal } = useContext(KepContext);

  return (
    <div className="nagykep">
      <button  onClick={() => {   bal();     }}   >
        bal
      </button>
      <img src={props.kep.src} alt={props.kep.cim} />
      <button          onClick={() => {          jobb();        }}      >
        jobb
      </button>
    </div>
  );
}

export default NagyKep;
