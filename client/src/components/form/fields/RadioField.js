import React from 'react';
import {
  Radio as RadioMUI,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  withStyles
} from '@material-ui/core';

const styles = theme => ({
  radioGroup: {
    margin: `${theme.spacing.unit * 2}px 0`
  }
});

const Radio = ({
  label,
  options,
  classes,
  input: { name, onChange, value, ...restInput },
  meta,
  ...rest
}) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        className={classes.radioGroup}
        name={name}
        value={value}
        onChange={(event, value) => onChange(value)}
      >
        {options.map(o => (
          <FormControlLabel
            key={o.value}
            value={o.value}
            control={<RadioMUI />}
            label={o.label}
            {...o.props}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{meta.touched && meta.error}</FormHelperText>
    </FormControl>
  );
};

export default withStyles(styles)(Radio);
