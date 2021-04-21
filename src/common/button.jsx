import React from "react";
import "./button.css";

const Button = props => {
  const getClassNames = props => {
    const {
      size,
      color,
      variant,
      disableShadow,
      startIcon,
      endIcon,
      disabled,
    } = props;
    return `button-${variant}`;
  };
  getClassNames(props);
  return (
    <>
      <button className={getClassNames(props)}>Default</button>
    </>
  );
};

export default Button;
