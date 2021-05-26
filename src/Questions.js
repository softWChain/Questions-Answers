import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Questions = ({ title, info }) => {
  const [infoUp, setInfoUp] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={(e) => setInfoUp(!infoUp)} className="btn">
          {infoUp ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {infoUp && <p>{info}</p>}
    </article>
  );
};

export default Questions;
