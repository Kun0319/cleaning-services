import React from "react";

const Button = (props) => {
  return (
    <div className="bookbtns">
      <button id={props.class}>上一步</button>
      <button>下一步</button>
    </div>
  );
};

export default Button;
