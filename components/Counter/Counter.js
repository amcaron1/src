import React from "react";
import "./Counter.css";

  // The render method returns the JSX that should be rendered
  const Counter = props => <h5 className="counter">{props.children}</h5>;
 
export default Counter;
