import React, { Component } from 'react';
import Logo from '../components/ui/Logo';
import Wizard from '../components/form/helpers/Wizard';
import Diagnose from '../components/form/Diagnose';
import Disclaimer from '../components/Disclaimer';
import { Grid } from '@material-ui/core';

class Index extends Component {
  goToRecommendations = () => {
    this.props.history.push('recommendations');
  };
  render() {
    return (
      <div>
        <Diagnose onSubmit={this.goToRecommendations} />
        <Disclaimer>
          * Asesoramiento orientado solo para atención ambulatoria y no
          emergencias
        </Disclaimer>
      </div>
    );
  }
}

export default Index;
