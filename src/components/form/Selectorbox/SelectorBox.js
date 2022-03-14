import React, { useEffect, useRef } from "react";
import useClickOutSide from "../../../hook/useClickOutSide";

function SelectorBox() {
  const { show, setShow, nodeRef } = useClickOutSide();

  return (
    <>
      <div
        className="relative p-4 bg-white rounded-lg"
        ref={nodeRef}
        onClick={() => setShow(!show)}
      >
        <span className="text-gray-400">Select your job</span>

        {show && (
          <div className="absolute left-0  w-full bg-red-400 ">
            <div className="flex flex-col">
              <span className="p-4">Frontend</span>
              <span className="p-4">Backend</span>
              <span className="p-4">Fullstack</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SelectorBox;
