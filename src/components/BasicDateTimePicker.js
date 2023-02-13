import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControl from "@mui/material/FormControl";
import { FormHelperText } from "@mui/material";
import moment from "moment";

export default function BasicDateTimePicker(props) {
  const { label, id, value, error, onChange, helperText, type, name } = props;

  const [date, setDate] = useState("");
  useEffect(() => {
    value && setDate(value);
  }, []);
  // console.log("error", error);
  return (
    <FormControl sx={{ width: "100%", mb: "1rem" }} error={error}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
            onChange(moment(newValue).format("MM/DD/YYYY"));
          }}
          id={id}
          name={name}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      {error && (
        <FormHelperText id="my-helper-text">{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}
