import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function FormWithFormik() {
  return (
    <div className="flex justify-center">
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          intro: "",
          job: "",
          term: false,
        }}
        validationSchema={Yup.object({
          firstname: Yup.string().required("Vui lòng nhập firstname"),
          lastname: Yup.string().required("Vui lòng nhập lastname"),
          email: Yup.string().email().required("Vui lòng nhập email"),
          intro: Yup.string().required("Vui lòng nhập thông tin"),
          job: Yup.string().required("Vui lòng chọn công việc"),
          term: Yup.boolean(),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="p-2 flex flex-col w-[400px]">
          <label htmlFor="firstnameId">First Name</label>
          <Field
            id="firstnameId"
            name="firstname"
            type="text"
            className="border-2 rounded-lg outline-none p-2 border-cyan-300 mb-2"
            placeholder="Enter your firstname"
          />
          <div className="text-red-500">
            <ErrorMessage name="firstname"></ErrorMessage>
          </div>
          <label htmlFor="lastnameId">Last Name</label>
          <Field
            id="lastnameId"
            name="lastname"
            type="text"
            className="border-2 rounded-lg outline-none p-2 border-cyan-300 mb-2 mt-2"
            placeholder="Enter your lastname"
          />
          <div className="text-red-500">
            <ErrorMessage name="lastname"></ErrorMessage>
          </div>
          <label htmlFor="emailId">Email</label>
          <Field
            id="emailId"
            name="email"
            type="text"
            className="border-2 rounded-lg outline-none p-2 border-cyan-300 mb-2 mt-2"
            placeholder="Enter your email"
          />
          <div className="text-red-500">
            <ErrorMessage name="email"></ErrorMessage>
          </div>
          <label htmlFor="introId">Intro</label>
          <Field
            id="introId"
            name="intro"
            type="intro"
            className="border-2 rounded-lg outline-none p-2 border-cyan-300 mb-2 mt-2 h-[200px] resize-none"
            placeholder="Introduce yourself"
            as="textarea"
          />
          <div className="text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
          <label htmlFor="jobId">Select your job</label>
          <Field
            id="jobId"
            name="job"
            className="border-2 rounded-lg outline-none p-2 border-cyan-300 mb-2 mt-2"
            placeholder="Select your job"
            as="select"
          >
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Fullstack Developer</option>
            <option value="degisn">Designer</option>
          </Field>
          <div className="text-red-500">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
          <div className="flex items-center">
            <Field
              id="termID"
              name="term"
              type="checkbox"
              className="border-2 rounded-lg outline-none p-2 border-cyan-300 mb-2 mt-2"
            />
            <p className="ml-2">I accept the terms and conditions</p>
          </div>
          <div className="text-red-500">
            <ErrorMessage name="term"></ErrorMessage>
          </div>
          <button
            type="submit"
            className="p-3 bg-slate-500 text-white rounded-lg"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormWithFormik;
