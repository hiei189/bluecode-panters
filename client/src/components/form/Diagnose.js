import React, { Component, Fragment } from 'react';
import Wizard from './helpers/Wizard';
import { Field, Form } from 'react-final-form';
import TextField from './fields/TextField';
import { MenuItem, Typography, Button } from '@material-ui/core';
import Grid from '../ui/Grid';
import SelectField from './fields/SelectField';
import RadioField from './fields/RadioField';
import { required } from './helpers/validators';
import Recommendations from '../Recommendations';

const yesNoOption = [
  { value: 'yes', label: 'Sí' },
  { value: 'no', label: 'No' }
];

class Diagnose extends Component {
  render() {
    return (
      <Form
        onSubmit={this.props.onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Field name="name" label="Nombres" component={TextField} />
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Field name="sex" label="Sexo" component={SelectField}>
                  <MenuItem value="M">Masculino</MenuItem>
                  <MenuItem value="F">Femenino</MenuItem>
                </Field>
              </Grid>
              <Grid item xs={6}>
                <Field
                  type="number"
                  name="age"
                  label="Edad"
                  component={TextField}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item container xs={12} justify="flex-end">
                <Button variant="contained" color="primary" type="submit">
                  Siguiente
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      >
        {/* <Wizard.Page>
          <Fragment>
            <Grid container spacing={24}>
              <Grid item xs>
                <Field
                  name="drink"
                  label="¿Bebes alcohol habitualmente?"
                  options={yesNoOption}
                  component={RadioField}
                />
              </Grid>
              <Grid item xs>
                <Field
                  name="smoke"
                  label="¿Fumas habitualmente?"
                  options={yesNoOption}
                  component={RadioField}
                />
              </Grid>
            </Grid>
          </Fragment>
        </Wizard.Page> */}
      </Form>
    );
  }
}

export default Diagnose;
