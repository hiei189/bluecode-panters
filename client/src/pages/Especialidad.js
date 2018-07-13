import React, { Component, Fragment } from 'react';
import { Typography, Paper, Grid, withStyles } from '@material-ui/core';
import Star from '@material-ui/icons/Star';

const medicos = [
  {
    id: 1,
    name: 'Juan Perez',
    description: 'Doctor con 100 años de experiencia',
    stars: 5,
    address: 'Bolivar - Pueblo Libre'
  },
  {
    id: 2,
    name: 'Arthur Ramos',
    description: 'Médico de la PUCP',
    stars: 4,
    address: 'Aeropuerto - Callao'
  }
];

const styles = theme => ({
  paper: {
    width: '100%',
    padding: '1rem',
    margin: '0.5rem'
  }
});

class Especialidad extends Component {
  render() {
    const {
      match: { params },
      classes
    } = this.props;

    return (
      <Fragment>
        <Typography variant="headline">
          Selecciona tu médico ideal en <strong>{params.especialidad}</strong>
        </Typography>
        {medicos.map(m => (
          <Grid container item xs={12}>
            <Paper className={classes.paper} key={m.id}>
              <Typography variant="title">{m.name}</Typography>
              <div>
                <svg path="M12 17.27L18v.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </Paper>
          </Grid>
        ))}
      </Fragment>
    );
  }
}

export default withStyles(styles)(Especialidad);
