import React, { Component, Fragment } from 'react';
import * as R from 'ramda';
import { Typography, Paper, Grid, withStyles, Avatar } from '@material-ui/core';
import Star from '../components/ui/Star';
import medicos from '../services/medicos';

const styles = theme => ({
  paper: {
    width: '100%',
    padding: '1rem',
    margin: '0.5rem'
  },
  bigAvatar: {
    width: '4rem',
    height: '4rem',
    marginRight: '1rem'
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
          <Grid key={m.id} container item xs={12}>
            <Paper className={classes.paper} key={m.id}>
              <Grid container>
                <Grid item xs="auto">
                  <Avatar
                    className={classes.bigAvatar}
                    src={`/medicos/${m.thumbnail}`}
                  />
                </Grid>
                <Grid item xs="auto">
                  <Typography variant="title">{m.name}</Typography>
                  <div>
                    {R.range(0, 5).map(idx => {
                      const filledStars = parseInt(m.stars);
                      return (
                        <Star
                          key={idx}
                          name={m.name.split(' ')[0] + m.id + idx}
                          value={
                            idx < filledStars
                              ? 1
                              : idx === filledStars
                                ? m.stars % 1
                                : 0
                          }
                        />
                      );
                    })}
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Fragment>
    );
  }
}

export default withStyles(styles)(Especialidad);
