import React, { Component, Fragment } from 'react';
import { Form, Field } from 'react-final-form';
import * as R from 'ramda';
import {
  Typography,
  Paper,
  withStyles,
  Input,
  Button
} from '@material-ui/core';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import TimePicker from 'material-ui-pickers/TimePicker';
import DatePicker from 'material-ui-pickers/DatePicker';
import medicos from '../services/medicos';
import Grid from '../components/ui/Grid';
import TextField from '../components/form/fields/TextField';

const styles = theme => ({
  resumen: { padding: '1rem' },
  commonText: { display: 'inline' },
  line: { display: 'flex', alignItems: 'baseline' },
  date: { minHeight: '4rem' },
  form: { width: '100%' },
  container: {}
});

class Cita extends Component {
  resumen = R.toPairs({
    Especialidad: this.props.match.params.especialidad,
    Doctor: medicos.find(m => m.id == this.props.match.params.id).name,
    Horario: '08:00 AM - 20:00 PM',
    Dirección: medicos.find(m => m.id == this.props.match.params.id).address
  });

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Typography variant="headline">Saca tu cita</Typography>
        <Paper className={classes.resumen}>
          {R.map(
            value => (
              <Grid key={value} container className={classes.line}>
                <Grid item md={3}>
                  <Typography
                    className={classes.commonText}
                    variant="title"
                    key={value}
                  >
                    {value[0]}:{' '}
                  </Typography>
                </Grid>
                <Grid item md={8}>
                  <Typography
                    className={classes.commonText}
                    variant="subheading"
                  >
                    {value[1]}
                  </Typography>
                </Grid>
              </Grid>
            ),
            this.resumen
          )}
        </Paper>
        <br />
        <Typography variant="headline">Datos de la cita</Typography>
        <Paper className={classes.resumen}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid className={classes.container} container xs={12}>
              <Form
                onSubmit={console.log}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid item xs={12}>
                      <Field
                        name="date"
                        fullWidth
                        component={({ input, meta, ...props }) => (
                          <DatePicker
                            label="Fecha de cita"
                            value={input.value || new Date()}
                            onChange={input.onChange}
                            {...props}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="time"
                        fullWidth
                        label="Hora de cita"
                        component={({ input, meta, ...props }) => (
                          <TimePicker
                            value={input.value || new Date()}
                            onChange={input.onChange}
                            {...props}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="email"
                        fullWidth
                        label="email"
                        component={TextField}
                      />
                    </Grid>
                    <Button variant="raised" color="primary">
                      ENVIAR
                    </Button>
                  </form>
                )}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Cita);
