import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import { DataGrid } from "@mui/x-data-grid";

const steps = ["USER INFORMATION", "ADDRESS DETAILS", "Thank You"];

function Main() {
  const [activeStep, setActiveStep] = useState(0);
  const [allValues, setAllValues] = useState("");
  const [rowData, setRowData] = useState([]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const columns = [
    { field: "name", headerName: "Name" },
    {
      field: "value",
      headerName: "Value",
    },
  ];

  useEffect(() => {
    if (activeStep === steps.length - 1) {
      const allKeys = Object.keys(allValues);
      const data = allKeys.map((item, idx) => {
        return { id: idx, name: item, value: allValues[item] };
      });
      setRowData(data);
    }
  }, [activeStep, allValues]);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={activeStep}
        className="custom-stepper"
        alternativeLabel
        sx={{ mb: "2rem" }}
      >
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length - 1 &&
        console.log("allValues--->", allValues)}
      {activeStep === steps.length - 1 ? (
        <React.Fragment>
          <Typography variant="h4" sx={{ color: "#60a662" }}>
            Data added successfully
          </Typography>
          <Box sx={{ height: 400, width: "100%" }}>
            {rowData.length > 0 && (
              <DataGrid
                rows={rowData}
                columns={columns}
                pageSize={30}
                rowsPerPageOptions={[2]}
              />
            )}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && (
            <FirstForm
              handleBack={handleBack}
              activeStep={activeStep}
              handleNext={handleNext}
              submit={(value) => {
                setAllValues(value);
              }}
            />
          )}
          {activeStep === 1 && (
            <SecondForm
              handleBack={handleBack}
              activeStep={activeStep}
              handleNext={handleNext}
              submit={(value) => {
                console.log("allValues", allValues);
                setAllValues({ ...allValues, ...value });
              }}
            />
          )}
        </React.Fragment>
      )}
    </Box>
  );
}

export default Main;
