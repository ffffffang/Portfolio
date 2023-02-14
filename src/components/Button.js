import React from "react";

const Button = (props) => {
  return (
    <div
      className={props.isActive ? "button active" : "button"}
      onClick={props.click}
      data-tag={props.name}
    >
      <p>{props.name}</p>
    </div>
  );
};

export default Button;
