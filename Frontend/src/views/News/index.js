
import React from 'react';
import PropTypes from 'prop-types';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import {
  ReactiveBase,
  ReactiveList,
  MultiDropdownList,
  DateRange,
  DataSearch,
} from '@appbaseio/reactivesearch';
//import theme from './components/utils/theme';
import { FormattedMessage } from 'react-intl';
import SpinnerLoading from './components/SpinnerLoading';
import ListCardsNews from './components/ListCardsNews/index';
import messages from './messages';
const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  filter: {
   // padding: theme.spacing.unit * 2,
  },
  colorPrimary: {
  //  color: theme.palette.primary.main,
  // marginLeft: theme.spacing.unit,
  },
  '@media (orientation: landscape)': {
    bigAvatar: {
      width: 15,
      height: 15,
    },
  },
};
/* eslint-disable react/prefer-stateless-function */
class News extends React.Component {
  render() {
    const capitalizeFirstLetter = string =>
      string.charAt(0).toUpperCase() + string.slice(1);
    const { classes } = this.props;
    
    return (
      <div className="card">
        <h5 className="card-header"> <LibraryBooks /> Search engine for terms in different data sources</h5>
        <div className="card-body">
      <Grid container>
        <Grid item>
          <ReactiveBase app="aleph" url="http://texdat.ddns.net:9200">
            <Grid container>
              <Grid item xs={1} />

              <Grid item xs={10} sm={4} className={classes.filter}>
                <MultiDropdownList
                  componentId="SourceSensor"
                  dataField="source.keyword"
                  react={{
                    and: ['NewsList'],
                  }}
                  title={<FormattedMessage {...messages.filterTitleSource} />}
                  showSearch={false}
                  placeholder=""
                  renderListItem={(label, count) => (
                    <div>
                      {capitalizeFirstLetter(
                        label.replace('pagina', 'página 12'),
                      )}
                      <span className={classes.colorPrimary}>({count})</span>
                    </div>
                  )}
                />
              </Grid>
              <Grid item xs={1} />

              <Grid item xs={1} />
              <Grid item xs={10} sm={4} className={classes.filter}>
                <DateRange
                  componentId="DateSensor"
                  title={<FormattedMessage {...messages.filterTitleDate} />}
                  placeholder={{
                    start: '',
                    end: '',
                  }}
                  dataField="newsDate"
                  queryFormat="date"
                />
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={1} sm={3} />

              <Grid item xs={10} sm={6}>
                <DataSearch
                  componentId="SearchSensor"
                  dataField={['title']}
                  autosuggest={false}
                  title={<FormattedMessage {...messages.filterSearchTitle} />}
                  placeholder=""
                />
              </Grid>
              <Grid item xs={1} sm={3} />

              <Grid item xs={12}>
                <ReactiveList
                  key="NewsList"
                  componentId="NewsList"
                  dataField="newsDate"
                  onResultStats={(totalResults, totalTime) => (
                    <Grid container>
                      <Grid item xs={12}>
                        <FormattedMessage
                          values={{
                            totalResults,
                            totalTime,
                          }}
                          {...messages.resultStats}
                        />
                      </Grid>
                    </Grid>
                  )}
                  sortBy="desc"
                  size={10}
                  pagination={false}
                  showResultStats
                  loader={<SpinnerLoading />}
                  react={{
                    and: ['DateSensor', 'SourceSensor', 'SearchSensor'],
                  }}
                  onAllData={newses => <ListCardsNews newses={newses} />}
                />
              </Grid>
            </Grid>
          </ReactiveBase>
        </Grid>
      </Grid>
      </div>
      </div>
    );
  }
}

News.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(News);
