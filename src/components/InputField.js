import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
function InputField(props) {
  const {
    label,
    id,
    value,
    error,
    type,
    ariaDescribedby,
    onChange,
    helperText,
  } = props;
  return (
    <FormControl sx={{ width: "100%", mb: "1rem" }}>
      <TextField
        id={id}
        label={label}
        variant="outlined"
        sx={{ width: "100%" }}
        type={type}
        aria-describedby={ariaDescribedby}
        onChange={onChange}
        value={value}
        error={error}
        helperText={helperText}
      />
    </FormControl>
  );
}

export default InputField;
