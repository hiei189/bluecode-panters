import React, { Component, Fragment } from 'react';
import { Form, Field } from 'react-final-form';
import Grid from '../components/ui/Grid';
import TextField from '../components/form/fields/TextField';
import Recommendations from '../components/Recommendations';

class RecommendationsPage extends Component {
  state = {
    data: []
  };

  getRecommendations = async ({ sintoma } = { sintoma: ' ' }) => {
    const data = await fetch(`/api/classifier?text=${sintoma}`);
    const res = await data.json();
    this.setState({ data: res.data.classes });
  };

  render() {
    const { data } = this.state;
    return (
      <Fragment>
        <Grid noMargin container spacing={24}>
          <Grid item md={6}>
            <Form
              onSubmit={this.getRecommendations}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    label="¿Qué síntomas tienes?"
                    name="sintoma"
                    fullWidth
                    component={TextField}
                  />
                </form>
              )}
            />
          </Grid>
          <Grid item md={6}>
            <Recommendations data={data} />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default RecommendationsPage;
