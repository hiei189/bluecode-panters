import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AppBar from './components/ui/AppBar';
import Index from './pages/Index';
import { withStyles, Grid } from '@material-ui/core';
import Logo from './components/ui/Logo';
import CssBaseline from '@material-ui/core/CssBaseline';
import Recommendations from './pages/Recommendations';
import Especialidad from './pages/Especialidad';
import Cita from './pages/Cita';

const styles = theme => ({
  root: {
    margin: 'auto',
    padding: '60px 8%'
  },
  page: {
    marginTop: '40px'
  },
  [theme.breakpoints.up('md')]: {
    root: {
      maxWidth: theme.breakpoints.values.md,
      padding: '60px 0'
    }
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar />
        <div className={classes.root}>
          <Logo />
          <div className={classes.page}>
            <Route path="/" exact component={Index} />
            <Route path="/recommendations" exact component={Recommendations} />
            <Route
              path="/especialidad/:especialidad"
              exact
              component={Especialidad}
            />
            <Route path="/cita/:especialidad/:id" exact component={Cita} />
          </div>
        </div>
        <CssBaseline />
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
