/**
 *
 * MarkerLabel
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
const {
  MarkerWithLabel,
} = require('react-google-maps/lib/components/addons/MarkerWithLabel');

const MarkerLabel = compose(
  withStyles(theme => ({
    markerLabel: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      fontSize: '.7rem',
    },
  })),
)(({ classes, data, onViewInfobox }) => (
  <MarkerWithLabel
    onClick={onViewInfobox({
      text: data.text,
      point: {
        lat: data.lat,
        lng: data.lon,
      },
    })}
    key={`${data.lat}-${data.lon}`}
    position={{ lat: data.lat, lng: data.lon }}
    labelAnchor={{ x: 0, y: -5 }}
    labelClass={classes.markerLabel}
  >
    <div>
      <Typography variant="body1" color="inherit">
        {data.text}
      </Typography>
    </div>
  </MarkerWithLabel>
));
MarkerLabel.propTypes = {};

export default MarkerLabel;
