import React, { Component, Fragment } from 'react';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Grid from '../components/ui/Grid';
import TextField from '../components/form/fields/TextField';
import Recommendations from '../components/Recommendations';
import { Button } from '@material-ui/core';

const required = value => !value && 'Campo requerido';

class RecommendationsPage extends Component {
  state = {
    data: []
  };

  getRecommendations = async ({ sintomas } = { sintomas: [] }) => {
    this.setState({ loading: true });
    const sinstomasText = sintomas.map(s => (s || {}).sintoma).join(' ');
    const data = await fetch(`/api/classifier?text=${sinstomasText}`);
    const res = await data.json();
    this.setState({ data: res.data.classes, loading: false });
  };

  render() {
    const { data, loading } = this.state;
    return (
      <Fragment>
        <Grid noMargin container spacing={24}>
          <Grid item md={6}>
            <Form
              onSubmit={this.getRecommendations}
              mutators={{ ...arrayMutators }}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <FieldArray name="sintomas">
                    {({ fields }) => {
                      if (!fields.length) fields.push();
                      return (
                        <Fragment>
                          {fields.map((name, i) => (
                            <Grid container key={i}>
                              <Field
                                label="¿Qué síntomas tienes?"
                                name={`${name}.sintoma`}
                                validate={required}
                                fullWidth
                                autoComplete="off"
                                component={TextField}
                              />
                            </Grid>
                          ))}
                          <Grid container item justify="flex-end">
                            {fields.length > 1 && (
                              <Button
                                type="button"
                                onClick={() => fields.pop()}
                              >
                                <Remove />
                              </Button>
                            )}
                            <Button type="button" onClick={() => fields.push()}>
                              <Add />
                            </Button>
                          </Grid>
                        </Fragment>
                      );
                    }}
                  </FieldArray>
                  <br />
                  <Grid container item justify="flex-end">
                    <Button
                      color="primary"
                      type="submit"
                      variant="raised"
                      fullWidth
                    >
                      Pedir síntoma
                    </Button>
                  </Grid>
                </form>
              )}
            />
          </Grid>
          <Grid item md={6}>
            <Recommendations data={data} loading={loading} />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default RecommendationsPage;
