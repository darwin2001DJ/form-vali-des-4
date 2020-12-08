import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ModalComponent from "./ModalComponent";

const formSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  mobileNumber: Yup.number()
    .typeError("MobileNumber is a required field")
    .test("len", "Invalid MobileNumber", (val) =>
      val === undefined ? "" : val.toString().length === 10
    )
    .required(),
  password: Yup.string().min(6).required(),
  aadhaarNumber: Yup.number()
    .typeError("AadhaarNumber is a required field")
    .test("len", "Invalid AadhaarNumber", (val) =>
      val === undefined ? "" : val.toString().length === 12
    )
    .required(),
  vehicleNumber: Yup.string().required(),
  vehicleType: Yup.string().required(),
  travelDate: Yup.date().typeError("TravelDate is a required field").required(),
});

export default function EPassForm() {
  const [data, setdata] = useState({});
  const [showModal, setshowModal] = useState(false);
  const [formErrors, setformErrors] = useState({});
  return (
    <>
      <h1>EPass Form</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          mobileNumber: null,
          password: "",
          aadhaarNumber: null,
          vehicleNumber: "",
          vehicleType: "",
          travelDate: null,
        }}
        onSubmit={(data) => setdata(data)}
        validationSchema={formSchema}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
          values,
        }) => {
          setdata(values);
          setformErrors(errors);
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="PersonName">Name</label>
              <input
                id="PersonName"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <div id="name-error">{errors.name}</div>
              )}
              <br />
              <label htmlFor="Email">Email</label>
              <input
                id="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <div id="email-error">{errors.email}</div>
              )}
              <br />
              <label htmlFor="MobileNumber">MobileNumber</label>
              <input
                id="MobileNumber"
                type="number"
                name="mobileNumber"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.mobileNumber && touched.mobileNumber && (
                <div id="mobileNumber-error">{errors.mobileNumber}</div>
              )}
              <br />
              <label htmlFor="Password">Password</label>
              <input
                id="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <div id="password-error">{errors.password}</div>
              )}
              <br />
              <label htmlFor="AadhaarNumber">AadhaarNumber</label>
              <input
                id="AadhaarNumber"
                type="number"
                name="aadhaarNumber"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.aadhaarNumber && touched.aadhaarNumber && (
                <div id="aadhaarNumber-error">{errors.aadhaarNumber}</div>
              )}
              <br />
              <label htmlFor="VehicleNumber">VehicleNumber</label>
              <input
                id="VehicleNumber"
                name="vehicleNumber"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.vehicleNumber && touched.vehicleNumber && (
                <div id="vehicleNumber-error">{errors.vehicleNumber}</div>
              )}
              <br />
              <label htmlFor="VehicleType">VehicleType</label>
              <input
                id="VehicleType"
                name="vehicleType"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.vehicleType && touched.vehicleType && (
                <div id="vehicleType-error">{errors.vehicleType}</div>
              )}
              <br />
              <label htmlFor="TravelDate">TravelDate</label>
              <input
                type="date"
                id="TravelDate"
                name="travelDate"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.travelDate && touched.travelDate && (
                <div id="travelDate-error">{errors.travelDate}</div>
              )}
              <br />
              <button
                type="submit"
                onClick={() => {
                  console.log(Object.keys(formErrors).length);
                  return Object.keys(formErrors).length >= 1
                    ? setshowModal(false)
                    : setshowModal(true);
                }}
              >
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
      {showModal ? <ModalComponent formData={data} /> : ""}
    </>
  );
}
