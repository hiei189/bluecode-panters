import * as R from 'ramda';
import React, { Component, Fragment } from 'react';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Speciality from '../components/recommendations/Speciality';
import Grid from './ui/Grid';

class Recommendations extends Component {
  render() {
    const { data, loading } = this.props;

    if (loading)
      return (
        <Grid container item justify="center">
          <br />
          <CircularProgress color="secondary" />
        </Grid>
      );

    if (!data.length) return null;

    const sortedSpecialities = R.reverse(R.sortBy(R.prop('confidence'), data));

    return (
      <Fragment>
        <Typography variant="headline">
          Encontramos estas coincidencias
        </Typography>
        <ol>
          {sortedSpecialities.map(s => (
            <li key={s.class_name}>
              <Speciality
                coincidence={s.confidence}
                speciality={s.class_name}
              />
            </li>
          ))}
        </ol>
      </Fragment>
    );
  }
}

export default Recommendations;
