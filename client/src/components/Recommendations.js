import * as R from 'ramda';
import React, { Component, Fragment } from 'react';
import { Typography } from '@material-ui/core';
import Speciality from '../components/recommendations/Speciality';

class Recommendations extends Component {
  render() {
    const { data } = this.props;
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
