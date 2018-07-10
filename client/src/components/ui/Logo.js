import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  logo: {
    textAlign: 'center'
  },
  img: {
    marginBottom: '16px'
  }
});

class Logo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.logo}>
        <img src="/logo.png" className={classes.img} />
        <Typography variant="subheading">
          Te ayudamos a sacar cita con tu médico ideal
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Logo);
