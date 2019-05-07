import React from "react";

export const Example1 = () => {
  return <h1 style={{ backgroundColor: "palevioletred" }}>Mitä?</h1>;
};

export const Example2 = () => {
  return React.createElement("h1", {
    children: "Mitä?",
    style: { backgroundColor: "palevioletred" }
  });
};

export const Example3 = () => {
  return {
    type: "h1",
    props: {
      style: { backgroundColor: "palevioletred" },
      children: "Mitä?"
    },
    key: null,
    ref: null,
    $$typeof: Symbol.for("react.element")
  };
};
