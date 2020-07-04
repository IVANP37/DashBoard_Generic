import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from 'containers/DashboardPage/messages';
import IconOverview from 'components/Svg/icons/menu/overview';
import IconComparation from 'components/Svg/icons/menu/comparation';
import IconIntertopic from 'components/Svg/icons/menu/intertopic';
import IconMaps from 'components/Svg/icons/menu/maps';
import IconNews from 'components/Svg/icons/menu/news';
import { include, reverse } from 'named-urls';
const URLS = {
  // simple route
  home: '/',

  dashboard: include('/', {
    all: '',
    comparation: 'comparation/',
    intertopic: 'intertopic/',
    map: 'map/',
    news: 'news/',
  }),
  user: include('/user', {
    login: 'login/',
    logout: 'logout/',
  }),
};

export const toUrl = reverse;

export const DASHBOARD_SECTIONS = [
  {
    url: URLS.dashboard.all,
    key: 'dashboard',
    label: <FormattedMessage {...messages.dashboard_all} />,
    icon: IconOverview,
    description: <FormattedMessage {...messages.dashboard_description_all} />,
  },
  {
    url: URLS.dashboard.comparation,
    key: 'comparation',
    label: <FormattedMessage {...messages.dashboard_comparation} />,
    icon: IconComparation,
    description: (
      <FormattedMessage {...messages.dashboard_description_comparation} />
    ),
  },
  {
    url: URLS.dashboard.intertopic,
    key: 'intertopic',
    label: <FormattedMessage {...messages.dashboard_intertopic} />,
    icon: IconIntertopic,
    description: (
      <FormattedMessage {...messages.dashboard_description_intertopic} />
    ),
  },
  {
    url: URLS.dashboard.map,
    key: 'maps',
    label: <FormattedMessage {...messages.dashboard_maps} />,
    icon: IconMaps,
    description: <FormattedMessage {...messages.dashboard_description_maps} />,
  },
  {
    url: URLS.dashboard.news,
    key: 'news',
    label: <FormattedMessage {...messages.dashboard_news} />,
    icon: IconNews,
    description: <FormattedMessage {...messages.dashboard_description_news} />,
  },
];

export default URLS;
