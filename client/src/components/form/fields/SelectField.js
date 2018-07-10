import React from 'react';
import { TextField, Select, FormControl, InputLabel } from '@material-ui/core';

export default ({
  input: { name, onChange, value, ...restInput },
  meta,
  label,
  children,
  ...rest
}) => (
  <FormControl fullWidth>
    <InputLabel error={meta.error && meta.touched} htmlFor={name}>
      {label}
    </InputLabel>
    <Select
      {...rest}
      fullWidth
      error={meta.error && meta.touched}
      inputProps={{ id: name, name, ...restInput }}
      onChange={onChange}
      value={value}
    >
      {children}
    </Select>
  </FormControl>
);
