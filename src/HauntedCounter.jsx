import React, { useEffect, useState } from "react";

export const HauntedCounter = (props) => {
  const [counter, setCounter] = useState(props.startFrom ?? 0);

  const add = (amount) => () => {
    setCounter((count) => count + amount);
  };

  const poltergeist = () => {
    console.log("Boooooh!");
    setCounter((count) => count + Math.round(Math.random() * 2) - 1);
  };

  useEffect(() => {
    if (Math.abs(counter) < 25) {
      setTimeout(poltergeist, 500 + Math.random() * 2500);
    }
  }, [counter]);

  return (
    <div
      style={{
        background: Math.abs(counter) > 5 ? "#E49273" : "#A8D0DB"
      }}
    >
      <span style={{ padding: "8px" }}>{counter}</span>
      <button
        style={{
          background: Math.abs(counter) > 5 ? "#DE7954" : "#7EB9C9"
        }}
        onClick={add(1)}
      >
        Add
      </button>
      <button
        style={{
          background: Math.abs(counter) > 5 ? "#DE7954" : "#7EB9C9"
        }}
        onClick={add(-1)}
      >
        Subtract
      </button>
      <button
        style={{
          background: Math.abs(counter) > 5 ? "#DE7954" : "#7EB9C9"
        }}
        onClick={add(-counter)}
      >
        Reset
      </button>
    </div>
  );
};
