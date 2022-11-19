import React from "react";
import "./Textbox.css";

const Textbox = ({
  placeholder,
  type,
  value,
  onChange,

  name,
  id,
  InputProps,
}) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      autoComplete="false"
      name={name}
      className="textbox"
      style={{ margin: "15px" }}
      onChange={onChange}
      type={type}
      value={value}
      label={placeholder}
    />
    // <input
    //   id={id}
    //   placeholder={placeholder}
    //   autoComplete="false"
    //   name={name}
    //   className={"textbox " + className}
    //   onChange={onChange}
    //   type={type}
    //   value={value}
    // />
  );
};

export default Textbox;
