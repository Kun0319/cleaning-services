import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div className="bookbtns">
      <Link to="/book1" id={props.class}>
        上一步
      </Link>
      <Link to={props.next}>下一步</Link>
    </div>
  );
};

export default Button;
