import React, { useState } from "react";
import InputField from "./InputField";
import Grid from "@mui/material/Grid";
import RowRadioButtonsGroup from "./RowRadioButtonsGroup";
import BasicSelect from "./BasicSelect";
import BasicDateTimePicker from "./BasicDateTimePicker";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";

function FirstForm(props) {
  const { handleBack, activeStep, handleNext, submit } = props;
  const [birthday, setBirthday] = useState("");
  const [touched, setTouched] = useState(false);
  const gender = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];
  const meritalStatus = [
    {
      label: "Signle",
      value: "single",
    },
    {
      label: "Married",
      value: "married",
    },
    {
      label: "Divorced",
      value: "divorced",
    },
    {
      label: "Widowed",
      value: "widowed",
    },
  ];
  const bloodGroup = [
    {
      label: "O+",
      value: "o-psotive",
    },
    {
      label: "O-",
      value: "o-negative",
    },
    {
      label: "AB+",
      value: "ab-positive",
    },
    {
      label: "AB-",
      value: "ab-negative",
    },
    {
      label: "A+",
      value: "a-positive",
    },
    {
      label: "A-",
      value: "a-negative",
    },
    {
      label: "B+",
      value: "b-positive",
    },
    {
      label: "B-",
      value: "b-negative",
    },
  ];
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    first: yup
      .string("Enter your first name")
      .required("First Name is required"),
    middle: yup
      .string("Enter your middle name")
      .required("Middle name is required"),
    last: yup.string("Enter your last name").required("Last name is required"),
    mobileNo: yup
      .string("Enter your mobile number")
      .required("Mobile number is required"),
    age: yup.string("Enter your age").required("Age is required"),
    bloodGroup: yup
      .string("Enter your blood group")
      .required("Blood group is required"),
    height: yup.string("Enter your height").required("Height is required"),
    weight: yup.string("Enter your weight").required("Weight is required"),
    gender: yup.string("Select your gender").required("Gender is required"),
    status: yup
      .string("Enter your merital status")
      .required("Merital status is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      first: "",
      middle: "",
      last: "",
      mobileNo: "",
      age: "",
      bloodGroup: "",
      height: "",
      weight: "",
      gender: "",
      status: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setTouched(true);
      if (birthday) {
        values.birthday = birthday;
        submit(values);
        handleNext();
      }
    },
  });
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputField
            label="First Name"
            type="text"
            id="first"
            name="first"
            aria-describedby="my-helper-text"
            value={formik.values.first}
            onChange={(value) => {
              formik.handleChange(value);
            }}
            error={formik.touched.first && Boolean(formik.errors.first)}
            helperText={formik.touched.first && formik.errors.first}
          />
          <InputField
            label="Last Name"
            type="text"
            id="last"
            name="last"
            aria-describedby="my-helper-text"
            value={formik.values.last}
            onChange={formik.handleChange}
            error={formik.touched.last && Boolean(formik.errors.last)}
            helperText={formik.touched.last && formik.errors.last}
          />
          <InputField
            label="Email"
            type="email"
            id="email"
            name="email"
            aria-describedby="my-helper-text"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <InputField
            label="Age"
            type="number"
            id="age"
            name="age"
            aria-describedby="my-helper-text"
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
          />
          <InputField
            label="Height"
            type="number"
            id="height"
            name="height"
            aria-describedby="my-helper-text"
            value={formik.values.height}
            onChange={formik.handleChange}
            error={formik.touched.height && Boolean(formik.errors.height)}
            helperText={formik.touched.height && formik.errors.height}
          />
          <RowRadioButtonsGroup
            options={gender}
            label="Gender"
            id="gender"
            name="gender"
            aria-describedby="my-helper-text"
            value={formik.values.gender}
            onChange={formik.handleChange}
            error={formik.touched.gender && Boolean(formik.errors.gender)}
            helperText={formik.touched.gender && formik.errors.gender}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            label="Middle Name"
            type="text"
            id="middle"
            name="middle"
            aria-describedby="my-helper-text"
            value={formik.values.middle}
            onChange={formik.handleChange}
            error={formik.touched.middle && Boolean(formik.errors.middle)}
            helperText={formik.touched.middle && formik.errors.middle}
          />
          <InputField
            label="Mobile No"
            type="number"
            id="mobileNo"
            name="mobileNo"
            aria-describedby="my-helper-text"
            value={formik.values.mobileNo}
            onChange={formik.handleChange}
            error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
            helperText={formik.touched.mobileNo && formik.errors.mobileNo}
          />
          <BasicDateTimePicker
            label="Birtday"
            id="birthday"
            name="birthday"
            type="text"
            value={birthday}
            onChange={(value) => {
              setTouched(true);
              setBirthday(value);
            }}
            error={touched && !birthday ? true : false}
            helperText="Please select birth date"
          />
          <BasicSelect
            options={bloodGroup}
            label="Blood Group"
            id="bloodGroup"
            name="bloodGroup"
            value={formik.values.bloodGroup}
            onChange={(value) => {
              formik.handleChange(value);
            }}
            error={
              formik.touched.bloodGroup && Boolean(formik.errors.bloodGroup)
            }
            helperText={formik.touched.bloodGroup && formik.errors.bloodGroup}
          />
          <InputField
            label="Weight"
            type="number"
            id="weight"
            name="weight"
            aria-describedby="my-helper-text"
            value={formik.values.weight}
            onChange={formik.handleChange}
            error={formik.touched.weight && Boolean(formik.errors.weight)}
            helperText={formik.touched.weight && formik.errors.weight}
          />
          <RowRadioButtonsGroup
            options={meritalStatus}
            label="Merital Status"
            id="status"
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            error={formik.touched.status && Boolean(formik.errors.status)}
            helperText={formik.touched.status && formik.errors.status}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Button type="button" onClick={formik.handleSubmit}>
          Next
        </Button>
      </Box>
    </form>
  );
}

export default FirstForm;
