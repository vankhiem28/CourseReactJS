import React from "react";
import { useController } from "react-hook-form";

function CheckboxRHF({ control, ...props }) {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <label className="cursor-pointer custom-checkbox">
      <input type="checkbox" {...field} {...props} className="hidden" />
      <div className="bg-white w-full h-full rounded-md flex items-center justify-center">
        <svg
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7453 1.89733L3.93178 9.71087L0.254822 6.03391L1.17132 5.11741L3.93178 7.87137L10.8288 0.980835L11.7453 1.89733Z"
            fill="white"
          />
        </svg>
      </div>
    </label>
  );
}

export default CheckboxRHF;
