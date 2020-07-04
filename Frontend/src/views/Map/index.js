
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MarkerWithLabel from 'react-google-maps/lib/components/addons/MarkerWithLabel';
import PinDropIcon from '@material-ui/icons/PinDrop';
import TableInfo from './tableInfo';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Map extends React.Component {
  render() {
    const MyMapComponent = withScriptjs(
      withGoogleMap(() => (
        <GoogleMap
          defaultZoom={4}
          defaultCenter={{ lat:  -38.4160957, lng: -63.6166725 }}
        >
          <MarkerWithLabel
            position={{ lat:  -38.4160957, lng: -63.6166725 }}
            labelAnchor={{ x: 0, y: 0 }}
            labelStyle={{
              backgroundColor: 'orange',
              fontSize: '12px',
              padding: '16px',
            }}
          >
            <div>Actions!</div>
          </MarkerWithLabel>
          <MarkerWithLabel
            position={{ lat:  -33.506906, lng: -60.210636 }}
            labelAnchor={{ x: 0, y: 0 }}
            labelStyle={{
              backgroundColor: 'orange',
              fontSize: '12px',
              padding: '16px',
            }}
          >
            <div >
              Actions!  
              </div>
          </MarkerWithLabel>
          <MarkerWithLabel
            position={{ lat:  -34.590117, lng: -68.253507 }}
            labelAnchor={{ x: 0, y: 0 }}
            labelStyle={{
              backgroundColor: 'orange',
              fontSize: '12px',
              padding: '16px',
            }}
          >
            <div >
              Actions!  
              </div>
          </MarkerWithLabel>
          <MarkerWithLabel
            position={{ lat:  -40.621771, lng:-67.31593 }}
            labelAnchor={{ x: 0, y: 0 }}
            labelStyle={{
              backgroundColor: 'orange',
              fontSize: '12px',
              padding: '16px',
            }}
          >
            <div >
              Actions!  
              </div>
          </MarkerWithLabel>
          <MarkerWithLabel
            position={{ lat:  -25.254012, lng: -57.691732 }}
            labelAnchor={{ x: 0, y: 0 }}
            labelStyle={{
              backgroundColor: 'orange',
              fontSize: '12px',
              padding: '16px',
            }}
          >
            <div >
              Actions!  
              </div>
          </MarkerWithLabel>
        </GoogleMap>
      )),
    );
    const markers = [];
    markers.push(['Lujan, Buenos Aires', -34.671476, -59.441929]);
    markers.push(['San Nicolás, Buenos Aires, Argentina', -33.506906, -60.210636]);
    markers.push(['San Rafael, Mendoza, Argentina',-34.590117,  -68.253507]);
    markers.push(['Río Negro, Argentina', -40.621771, -67.315939]);
    markers.push(['Asunción, Paraguay', -25.254012, -57.691732]);
    markers.push(['Cazapá, Paraguay', -26.236612, -56.028013]);
    markers.push(['Misiones, Argentina', -26.806759, -54.368207]);
    markers.push(['Itapúa, Misiones, Argentina', -26.74791, -55.74155]);
 
    const Mapa = (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAn9oXJlRXmsCbVWcle6Axwtp5CXi_27DI"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
    return (
      <div>
        <h5 className="card-header"><PinDropIcon />Mark points on the map to perform actions!!!</h5>
        {Mapa}
         <div>
           <hr/>
           <TableInfo />
         </div>
      </div>
    );
  }
}

Map.propTypes = {};

export default Map;

