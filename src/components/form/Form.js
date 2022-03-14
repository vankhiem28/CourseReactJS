import React, { useRef, useState } from "react";

function Form() {
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    checked: "false",
  });

  const inputRef = useRef();

  const handleInput = (e) => {
    const type = e.target.type;
    setValue({
      ...value,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return (
    <div className="p-2">
      <input
        ref={inputRef}
        type="text"
        name="fullname"
        className="border-2 rounded-lg outline-none p-2 border-cyan-300"
        placeholder="Enter your full name"
        onChange={handleInput}
        value={value.fullname}
      />
      <input
        type="text"
        name="email"
        className="border-2 rounded-lg outline-none p-2 border-cyan-300 ml-4"
        placeholder="Enter your email address"
        onChange={handleInput}
        value={value.email}
      />
      <input
        type="checkbox"
        name="checked"
        className="border-2 rounded-lg outline-none p-2 border-cyan-300 ml-4"
        placeholder="Enter your email address"
        onChange={handleInput}
        value={value.email}
      />
    </div>
  );
}

export default Form;
