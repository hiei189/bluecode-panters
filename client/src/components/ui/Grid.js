import React from 'react';
import { Grid as GridMUI, withStyles } from '@material-ui/core';

const styles = theme => ({
  marginTop: {
    marginTop: theme.spacing.unit * 3
  }
});

const GridW = ({ classes, noMargin, item, ...rest }) => {
  return (
    <GridMUI
      className={item || noMargin ? '' : classes.marginTop}
      item={item}
      {...rest}
    />
  );
};

export default withStyles(styles)(GridW);
