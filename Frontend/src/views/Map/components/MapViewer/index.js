

import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import { compose, withProps, withState, withHandlers } from 'recompose';
//import SpinnerLoading from 'components/SpinnerLoading';
import MarkerLabels from './components/MarkerLabels';
import Infobox from './components/Infobox';

const MapViewer = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAn9oXJlRXmsCbVWcle6Axwtp5CXi_27DI',
   // loadingElement: <SpinnerLoading />,
    containerElement: <div style={{ height: `80vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    centerPoint: { lat: -35.92242, lng: -64.439852 },
  }),
  withScriptjs,
  withGoogleMap,
  withState('isInfoboxVisible', 'setIsInfoboxVisible', false),
  withState('infoboxData', 'setInfoboxData', () => ({
    text: '',
  })),
  withHandlers({
    viewInfobox: ({ setInfoboxData, setIsInfoboxVisible }) => data => () => {
      setInfoboxData(data);
      setIsInfoboxVisible(true);
    },
    onCloseInfobox: ({ setIsInfoboxVisible }) => () => {
      console.log(2);
      setIsInfoboxVisible(false);
    },
  }),

  withState('markers', 'setMarkers', [
    {
      lat: -34.671476,
      lon: -59.441929,
      text: 'Lujan, Buenos Aires',
    },
    {
      lat: -33.506906,
      lon: -60.210636,
      text: 'San Nicolás, Buenos Aires, Argentina',
    },

    {
      lat: -34.590117,
      lon: -68.253507,
      text: 'San Rafael, Mendoza, Argentina',
    },
    {
      lat: -40.621771,
      lon: -67.315939,
      text: 'Río Negro, Argentina',
    },
    {
      lat: -25.254012,
      lon: -57.691732,
      text: 'Asunción, Paraguay',
    },
    {
      lat: -26.236612,
      lon: -56.028013,
      text: 'Cazapá, Paraguay',
    },
    {
      lat: -26.806759,
      lon: -54.368207,
      text: 'Misiones, Argentina',
    },
    {
      lat: -26.74791,
      lon: -55.74155,
      text: 'Itapúa, Misiones, Argentina',
    },
  ]),
)(
  ({
    markers,
    isInfoboxVisible,
    onCloseInfobox,
    infoboxData,
    centerPoint,
    viewInfobox,
  }) => (
    <GoogleMap defaultZoom={4} defaultCenter={centerPoint}>
      {isInfoboxVisible && (
        <Infobox
          info={infoboxData}
          onCloseInfobox={onCloseInfobox}
          isVisible={isInfoboxVisible}
        />
      )}

      {!isInfoboxVisible && (
        <MarkerLabels markers={markers} onViewInfobox={viewInfobox} />
      )}
    </GoogleMap>
  ),
);

MapViewer.propTypes = {};

export default MapViewer;
