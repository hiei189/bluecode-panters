import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  disclaimer: {
    marginTop: theme.spacing.unit * 2
  }
});

const Disclaimer = ({ children, classes, ...rest }) => {
  return (
    <Typography className={classes.disclaimer} variant="caption" {...rest}>
      {children}
    </Typography>
  );
};

export default withStyles(styles)(Disclaimer);
