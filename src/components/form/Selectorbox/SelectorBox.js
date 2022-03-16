import React, { useEffect, useRef, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../../hook/useClickOutSide";

function SelectorBox({ control, setValue, name }) {
  const { show, setShow, nodeRef } = useClickOutSide();
  const jobValue = useWatch({ control, name: "job", defaultValue: "" });
  const [label, setLabel] = useState("Select your job");

  const handleClickDropDown = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };

  return (
    <div className="relative p-4 bg-white rounded-lg" ref={nodeRef}>
      <div
        className="text-gray-400 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {label}
      </div>

      {show && (
        <div className="border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white">
          <div
            className="p-4 cursor-pointer hover:bg-gray-300 "
            onClick={handleClickDropDown}
            data-value="frontend"
          >
            Frontend
          </div>
          <div
            className="p-4 cursor-pointer hover:bg-gray-300 "
            onClick={handleClickDropDown}
            data-value="backend"
          >
            Backend
          </div>
          <div
            className="p-4 cursor-pointer hover:bg-gray-300 "
            onClick={handleClickDropDown}
            data-value="fullstack"
          >
            Fullstack
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectorBox;
