/*
 * News Messages
 *
 * This contains all the text for the News component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.News';

export default defineMessages({
  filterTitleSearchWords: {
    id: `${scope}.filterTitleSearchWords`,
    defaultMessage: 'Filter by Words',
  },
  filterSearchWords: {
    id: `${scope}.filterSearchWords`,
    defaultMessage: 'Write one or more words',
  },
  filterTitleSource: {
    id: `${scope}.filterTitleSource`,
    defaultMessage: 'Filter by Sources',
  },
  filterSource: {
    id: `${scope}.filterSource`,
    defaultMessage: 'Select one or more Sources.',
  },
  noResults: {
    id: `${scope}.noResults`,
    defaultMessage: 'No Results found.',
  },
  resultStats: {
    id: `${scope}.resultStats`,
    defaultMessage: '{totalResults} results found in {totalTime}ms.',
  },

  filterTitleDate: {
    id: `${scope}.filterTitleDate`,
    defaultMessage: 'Filter by Rank of Time',
  },
  filterStartDate: {
    id: `${scope}.filterStartDate`,
    defaultMessage: 'Start Date',
  },
  filterEndDate: {
    id: `${scope}.filterEndDate`,
    defaultMessage: 'End Date',
  },
  filterSearchTitle: {
    id: `${scope}.filterSearchTitle`,
    defaultMessage: 'Search words in Sources selected',
  },
  filterSearch: {
    id: `${scope}.filterSearch`,
    defaultMessage: 'Find words in the Sources selected',
  },
});
