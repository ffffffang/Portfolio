import React from "react";

const Button = (props) => {
  let active = props.active;
  function handleClick(e) {
    props.click(e);
  }
  return (
    <div
      className={active ? "button active" : "button"}
      onClick={handleClick}
      data-tag={props.name}
    >
      <p>{props.name}</p>
    </div>
  );
};

export default Button;
