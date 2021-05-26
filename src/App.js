import "./styles.css";
import data from "./data";
import Questions from "./Questions";
import React, { useState } from "react";
import veys from "./data2";

export default function App() {
  const [useData, setUseData] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {useData.map((question,) => {
            return <Questions key={question.id} {...question} />;
          })}
         
        </section>
      </div>
    </main>
  );
}
