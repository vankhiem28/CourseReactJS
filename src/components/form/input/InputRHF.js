import React from "react";
import { useController } from "react-hook-form";

function InputRHF({ control, ...props }) {
  const { field } = useController({
    name: props.name,
    control,
    defaultValue: "",
  });

  return (
    <input
      className="p-4 border border-gray-300 outline-none rounded-lg focus:border-blue-500"
      {...props}
      {...field}
    />
  );
}

export default InputRHF;
