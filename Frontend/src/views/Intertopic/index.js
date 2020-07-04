/**
 *
 * Intertopic
 *
 */

import React from 'react';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

require('./assets/d3.v3');
require('./assets/ldavis');
require('./assets/lda.css');

/* eslint-disable react/prefer-stateless-function */
class Intertopic extends React.Component {
  render() {
    return ( 
        <div >
           <h5 className="card-header"> <MultilineChartIcon /> Emotions and distance chart through a collection of data collected from Social Networks</h5>
        <div >
           <div id="intertopic-canvas" />
           </div>
        </div>
    );
  }

  componentDidMount() {
    // componentDidUpdate
    // eslint-disable-next-line
    const vis = new LDAvis('#intertopic-canvas');
  }
}

Intertopic.propTypes = {};

export default Intertopic;
