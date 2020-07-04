/**
 *
 * MarkerLabels
 *
 */

import React from 'react';
import { compose } from 'recompose';
import MarkerLabel from './components/MarkerLabel/index';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const MarkerLabels = compose()(({ markers, onViewInfobox }) =>
  markers.map(marker => (
    <MarkerLabel
      key={`${marker.lat}-${marker.lon}`}
      data={marker}
      onViewInfobox={onViewInfobox}
    />
  )),
);

MarkerLabels.propTypes = {};

export default MarkerLabels;
