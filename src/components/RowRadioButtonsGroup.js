import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FormHelperText } from "@mui/material";

export default function RowRadioButtonsGroup(props) {
  const { options, label, id, error, onChange, helperText, name } = props;
  return (
    <FormControl error={error}>
      <FormLabel id={id}>{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        id={id}
        name={name}
        onChange={(e) => {
          onChange(e);
        }}
      >
        {options.map((option, idx) => {
          return (
            <FormControlLabel
              key={`option-${idx}`}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          );
        })}
      </RadioGroup>
      {error && (
        <FormHelperText id="my-helper-text">{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}
