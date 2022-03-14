import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function FormWithRFH() {
  const schemaValidation = Yup.object({
    firstName: Yup.string().required("Vui lòng nhập tên"),
    checkBox: Yup.boolean().required("Ban chua chon"),
    checkBox1: Yup.boolean().required("Ban chua chon"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ resolver: yupResolver(schemaValidation) });

  console.log(errors);

  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="p-2 flex flex-col w-[400px]"
      >
        <label htmlFor="firstnameId">First Name</label>
        <input
          id="firstnameId"
          name="firstname"
          type="text"
          className="border-2 rounded-lg outline-none p-2 border-cyan-300 mb-2"
          placeholder="Enter your firstname"
          {...register("firstName")}
        />
        {errors?.firstName?.message && (
          <div className="text-red-500">{errors.firstName.message}</div>
        )}
        <label htmlFor="lastnameId">Last Name</label>
        <input
          id="lastnameId"
          name="lastname"
          type="text"
          className="border-2 rounded-lg outline-none p-2 border-cyan-300 mb-2 mt-2"
          placeholder="Enter your lastname"
          {...register("lastname")}
        />
        <label htmlFor="emailId">Email</label>
        <input
          id="emailId"
          name="email"
          type="text"
          className="border-2 rounded-lg outline-none p-2 border-cyan-300 mb-2 mt-2"
          placeholder="Enter your email"
          {...register("email")}
        />
        <input
          // id="emailId"
          // name="email"
          type="checkbox"
          // className="border-2 rounded-lg outline-none p-2 border-cyan-300 mb-2 mt-2"
          // placeholder="Enter your email"
          {...register("checkBox")}
        />
        <input
          // id="emailId"
          // name="email"
          type="checkbox"
          // className="border-2 rounded-lg outline-none p-2 border-cyan-300 mb-2 mt-2"
          // placeholder="Enter your email"
          {...register("checkBox1")}
        />
        <button
          type="submit"
          className="p-3 flex justify-center bg-slate-500 text-white rounded-lg "
        >
          {isSubmitting ? (
            <div className="w-5 h-5  border-white border-4 border-t-transparent rounded-full animate-spin "></div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormWithRFH;
