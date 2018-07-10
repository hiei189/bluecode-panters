import React from 'react';
import { TextField } from '@material-ui/core';

export default ({
  input: { name, onChange, value, ...restInput },
  meta,
  ...rest
}) => (
  <TextField
    {...rest}
    fullWidth
    name={name}
    helperText={meta.touched ? meta.error : undefined}
    error={meta.error && meta.touched}
    onChange={onChange}
    value={value}
  />
);
