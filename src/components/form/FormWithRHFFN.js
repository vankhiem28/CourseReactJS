import React from "react";
import { useForm } from "react-hook-form";
import CheckboxRHF from "./checkbox/CheckboxRHF";
import InputRHF from "./input/InputRHF";
import RadioRHF from "./radio/RadioRHF";
import SelectorBox from "./Selectorbox/SelectorBox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required("Vui lòng nhập tên"),
    password: yup
      .string()
      .min(8, "Mật khẩu phải ít nhất có 8 ký tự")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message: "Mật khẩu sai địng dạng",
        }
      )
      .required("Vui lòng nhập mật khẩu"),
    email: yup
      .string()
      .email("Bạn nhập sai định dạng email")
      .required("Vui lòng nhập email"),
    gender: yup.string().required("Vui lòng chọn giới tính"),
    job: yup.string().required("Vui lòng chọn công việc"),
    term: yup.string().required("Vui lòng xác nhận"),
  })
  .required();

function FormWithRHFFN() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    setValue,
    reset,
  } = useForm({ resolver: yupResolver(schema), mode: "onchange" });

  const onSubmit = (values) => {
    if (!isValid) return;
    console.log(values);
    reset({
      username: "",
      password: "",
      email: "",
      gender: "",
      job: "",
      term: false,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[300px] mx-auto mt-5"
      >
        <div className="flex flex-col mb-2">
          <label htmlFor="userNameID" className="text-[16px]">
            Username
          </label>
          <InputRHF
            id="userNameID"
            name="username"
            type="text"
            placeholder="Enter your username"
            control={control}
          ></InputRHF>
        </div>
        {errors.username && (
          <div className="text-red-500 ">{errors.username.message}</div>
        )}
        <div className="flex flex-col mb-2">
          <label htmlFor="passwordID" className="text-[16px]">
            Password
          </label>
          <InputRHF
            id="passwordID"
            name="password"
            type="password"
            placeholder="Enter your password"
            control={control}
          ></InputRHF>
        </div>
        {errors.password && (
          <div className="text-red-500 ">{errors.password.message}</div>
        )}
        <div className="flex flex-col mb-2">
          <label htmlFor="emailID" className="text-[16px]">
            Email
          </label>
          <InputRHF
            id="emailID"
            name="email"
            type="email"
            placeholder="Enter your email"
            control={control}
          ></InputRHF>
        </div>
        {errors.email && (
          <div className="text-red-500 ">{errors.email.message}</div>
        )}
        <div className="flex flex-col mb-2">
          <label htmlFor="" className="text-[16px]">
            Gender
            <div className="flex items-center pl-1 gap-x-3">
              <div className="flex gap-x-2 items-center">
                <RadioRHF
                  control={control}
                  value="male"
                  name="gender"
                ></RadioRHF>
                <span>Male</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <RadioRHF
                  control={control}
                  value="female"
                  name="gender"
                ></RadioRHF>
                <span>Female</span>
              </div>
            </div>
          </label>
        </div>
        {errors.gender && (
          <div className="text-red-500 ">{errors.gender.message}</div>
        )}
        <div className="flex flex-col mb-2">
          <label htmlFor="" className="text-[16px]">
            Are you
          </label>
          <div className="">
            <SelectorBox
              control={control}
              setValue={setValue}
              name="job"
            ></SelectorBox>
          </div>
        </div>
        {errors.job && (
          <div className="text-red-500 ">{errors.job.message}</div>
        )}
        <div className="flex flex-col mb-2">
          <div className="flex items-center gap-x-3">
            <div className="flex gap-x-2 items-center">
              <CheckboxRHF
                control={control}
                name="term"
                id="termID"
              ></CheckboxRHF>
            </div>
            <label htmlFor="termID" className="text-[16px]">
              I accept the term and conditions
            </label>
          </div>
        </div>
        {errors.term && (
          <div className="text-red-500 ">{errors.term.message}</div>
        )}
        <button className="w-full p-4 bg-blue-400 rounded-lg mt-3 text-white">
          {isSubmitting ? (
            <div className="w-5 h-5 rounded-full border-2 border-white mx-auto border-t-transparent animate-spin"></div>
          ) : (
            <div>Submit</div>
          )}
        </button>
      </form>
    </>
  );
}

export default FormWithRHFFN;
