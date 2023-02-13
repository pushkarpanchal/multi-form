import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";

export default function BasicSelect(props) {
  const { options, label, id, value, error, onChange, helperText, name } =
    props;
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ width: "100%", mb: "1rem" }} error={error}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id={id}
        value={age}
        label={label}
        name={name}
        onChange={(e) => {
          onChange(e);
          handleChange(e);
        }}
      >
        {options.map((option, idx) => {
          return (
            <MenuItem key={`select-${idx}`} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
      {error && (
        <FormHelperText id="my-helper-text">{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}
