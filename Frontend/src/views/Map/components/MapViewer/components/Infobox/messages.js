/*
 * InfoBox Messages
 *
 * This contains all the text for the InfoBox component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.InfoBox';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the InfoBox component!',
  },
});
