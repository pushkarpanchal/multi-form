import React from "react";
import InputField from "./InputField";
import Grid from "@mui/material/Grid";
import BasicSelect from "./BasicSelect";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";

function SecondForm(props) {
  const { handleBack, handleNext, submit } = props;
  const country = [
    {
      label: "India",
      value: "india",
    },
    {
      label: "USA",
      value: "usa",
    },
    {
      label: "Uk",
      value: "uk",
    },
  ];
  const city = [
    {
      label: "Mumbai",
      value: "mumbai",
    },
    {
      label: "Ahmedabad",
      value: "ahmedabad",
    },
    {
      label: "New York",
      value: "newyork",
    },
    {
      label: "Washington",
      value: "washington",
    },
    {
      label: "London",
      value: "londan",
    },
    {
      label: "Manchester",
      value: "manchester",
    },
  ];
  const state = [
    {
      label: "Maharastra",
      value: "maharastra",
    },
    {
      label: "Gujrat",
      value: "gujrat",
    },
    {
      label: "New York",
      value: "newyork",
    },
    {
      label: "Washington",
      value: "washington",
    },
    {
      label: "London",
      value: "londan",
    },
    {
      label: "Manchester",
      value: "manchester",
    },
  ];
  const validationSchema = yup.object({
    address1: yup
      .string("Enter your address line 1")
      .required("Address is required"),
    address2: yup
      .string("Enter your address line 1")
      .required("Address is required"),
    city: yup.string("Enter your city").required("City is required"),
    state: yup.string("Enter your state").required("State is required"),
    country: yup.string("Enter your country").required("Country is required"),
    pin: yup.string("Enter your pin").required("Pin is required"),
  });
  const formik = useFormik({
    initialValues: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "",
      pin: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submit(values);
      handleNext();
    },
  });
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputField
            label="Address Line 1"
            type="text"
            id="address1"
            name="address1"
            aria-describedby="my-helper-text"
            value={formik.values.address1}
            onChange={formik.handleChange}
            error={formik.touched.address1 && Boolean(formik.errors.address1)}
            helperText={formik.touched.address1 && formik.errors.address1}
          />
          <BasicSelect
            options={city}
            label="City"
            id="city"
            name="city"
            aria-describedby="my-helper-text"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
          <BasicSelect
            options={country}
            label="Country"
            id="country"
            name="country"
            aria-describedby="my-helper-text"
            value={formik.values.country}
            onChange={formik.handleChange}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            label="Address Line 2"
            type="text"
            id="address2"
            name="address2"
            aria-describedby="my-helper-text"
            value={formik.values.address2}
            onChange={formik.handleChange}
            error={formik.touched.address2 && Boolean(formik.errors.address2)}
            helperText={formik.touched.address2 && formik.errors.address2}
          />
          <BasicSelect
            options={state}
            label="State"
            id="state"
            name="state"
            aria-describedby="my-helper-text"
            value={formik.values.state}
            onChange={formik.handleChange}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
          />
          <InputField
            label="Pin"
            type="number"
            id="pin"
            name="pin"
            aria-describedby="my-helper-text"
            value={formik.values.pin}
            onChange={formik.handleChange}
            error={formik.touched.pin && Boolean(formik.errors.pin)}
            helperText={formik.touched.pin && formik.errors.pin}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button type="button" onClick={formik.handleSubmit}>
          Next
        </Button>
      </Box>
    </form>
  );
}

export default SecondForm;
