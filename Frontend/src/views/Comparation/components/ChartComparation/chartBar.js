/**
 *
 * ChartComparation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
} from 'victory';
import { withStyles } from '@material-ui/core/styles';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import { compose } from 'recompose';

const styles = theme => ({
  chartAnimation: {
    animation: `scale 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  '@keyframes scale': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(0.85)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
});

// eslint-disable-next-line no-sparse-arrays
const dataCFK = [
  { source: 'Clarín', recuento: 13000 },
  { source: 'Página 12', recuento: 16500 },
  { source: 'Telam', recuento: 14250 },
  { source: 'La Nación', recuento: 19000 },
];

const dataMacri = [
  { source: 'Clarín', recuento: 15000 },
  { source: 'Página 12', recuento: 12500 },
  { source: 'Telam', recuento: 19500 },
  { source: 'La Nación', recuento: 13000 },
];

const ChartComparation = ({ classes }) => (

      <React.Fragment className={classes.chartAnimation}>
      <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
      <VictoryAxis
        tickValues={['Clarín', 'Página 12', 'Telam', 'La Nación']}
        tickFormat={['Clarín', 'Página 12', 'Telam', 'La Nación']}
      />
      <VictoryAxis dependentAxis tickFormat={x => `${x / 1000}k`} />
      <VictoryStack>
        <VictoryBar data={dataCFK} x="source" y="recuento" />
        <VictoryBar data={dataMacri} x="source" y="recuento" />
      </VictoryStack>
    </VictoryChart>
  </React.Fragment>
);

ChartComparation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles))(ChartComparation);
