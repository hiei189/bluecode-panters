import React, { Component } from 'react';
import * as R from 'ramda';
import cns from 'classnames';
import { withRouter } from 'react-router-dom';
import {
  Typography,
  Paper,
  Grid,
  withStyles,
  Avatar,
  Button
} from '@material-ui/core';
import Star from '../components/ui/Star';

const styles = theme => ({
  paper: {
    width: '100%',
    padding: '1rem',
    margin: '0.5rem',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    display: 'flex'
  },
  bigAvatar: {
    width: '4rem',
    height: '4rem',
    marginRight: '1rem'
  },
  flex: {
    display: 'flex'
  },
  container: {
    position: 'relative',
    minHeight: '100px'
  },
  biggerContainer: {
    minHeight: '130px'
  },
  biggerPaper: {
    left: '-1rem',
    right: '-1rem'
  }
});

class Medico extends Component {
  state = {
    mouseOver: false
  };

  goToCita = () => {
    const { history, medico, especialidad } = this.props;
    history.push(`/cita/${especialidad}/${medico.id}`);
  };

  render() {
    const { medico, classes, especialidad } = this.props;
    const { mouseOver } = this.state;
    return (
      <Grid
        onMouseEnter={this.setMouse}
        onMouseLeave={this.unsetMouse}
        className={cns(classes.container, {
          [classes.biggerContainer]: mouseOver
        })}
        container
        item
        xs={12}
      >
        <Paper
          className={cns(classes.paper, { [classes.biggerPaper]: mouseOver })}
        >
          <Grid container>
            <Grid item xs="auto">
              <Avatar
                className={classes.bigAvatar}
                src={`/medicos/${medico.thumbnail}`}
              />
            </Grid>
            <Grid item xs>
              <Typography variant="title">{medico.name}</Typography>
              <div>
                {R.range(0, 5).map(idx => {
                  const filledStars = parseInt(medico.stars);
                  return (
                    <Star
                      key={idx}
                      name={medico.name.split(' ')[0] + medico.id + idx}
                      value={
                        idx < filledStars
                          ? 1
                          : idx === filledStars
                            ? medico.stars % 1
                            : 0
                      }
                    />
                  );
                })}
              </div>
            </Grid>
            <Grid item className={classes.flex}>
              <Grid container alignItems="center">
                <Button
                  onClick={this.goToCita}
                  color="primary"
                  variant="raised"
                >
                  SACAR CITA
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(Medico));
