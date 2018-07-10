import React from 'react';
import { Typography, Divider, Button, withStyles } from '@material-ui/core';
import Grid from '../ui/Grid';

const styles = {};

const Speciality = ({ speciality, coincidence }) => {
  return (
    <Grid container alignItems="baseline">
      <Grid item md={8} xs={6}>
        <Typography variant="title">{speciality}</Typography>
        <Typography variant="caption">{`${(coincidence * 100).toFixed(
          2
        )} % de coincidencia`}</Typography>
      </Grid>
      <Button color="secondary" variant="raised">
        Elegir
      </Button>
    </Grid>
  );
};

export default withStyles(styles)(Speciality);
