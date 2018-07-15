import React, { Component, Fragment } from 'react';
import * as R from 'ramda';
import {
  Typography,
  Paper,
  Grid,
  withStyles,
  Avatar,
  Button
} from '@material-ui/core';
import Star from '../components/ui/Star';
import medicos from '../services/medicos';
import Medico from '../components/Medico';

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
          <Medico key={m.id} especialidad={params.especialidad} medico={m} />
        ))}
      </Fragment>
    );
  }
}

export default Especialidad;
