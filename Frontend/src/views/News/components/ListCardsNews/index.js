/**
 *
 * ListCardsNews
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

// import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
// import messages from './messages';
import CardNews from '../CardNews/index';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  cardItem: {
    margin: theme.spacing.unit,
  },
});
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-underscore-dangle */
class ListCardsNews extends React.Component {
  render() {
    const { newses, classes } = this.props;
    const Newses = () =>
      newses.map(news => (
        <Grid key={news._id} className={classes.cardItem} item xs={12} sm={3}>
          <CardNews key={news._id} news={news} />
        </Grid>
      ));
    return (
      <Grid
        className={classes.root}
        container
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <Newses />
      </Grid>
    );
  }
}

ListCardsNews.propTypes = {
  classes: PropTypes.object.isRequired,
  newses: PropTypes.array.isRequired,
};

export default withStyles(styles)(ListCardsNews);
