/**
 *
 * News
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import ChartComparation from './components/ChartComparation';
import EqualizerIcon from '@material-ui/icons/Equalizer';

/* eslint-disable react/prefer-stateless-function */
class News extends React.Component {
  render() {
    return (
      <div className="card">
        <h5 className="card-header"> <EqualizerIcon /> Data Collection Analysis Charts</h5>
        <div className="card-body">
        <ChartComparation />
        </div>
      </div>
    );
  }
}

News.propTypes = {};

export default News;
