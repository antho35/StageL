import React, { Component } from 'react';
import busy from '../img/erreur.jpg';
import handicap from '../img/Handicap.png';
import Iframe from 'react-iframe';
import pano from '../img/panoTest.jpg'
import available from '../img/hand_vert.png';
import noinformation from '../img/NA.jpg';
import pano2 from '../img/pano2.jpg';
import erreur from '../img/handicap.orange.png';
import carte from '../img/carte.png';
import L from 'leaflet';


class Map extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
  /*  var map = L.map('map', {
      maxZoom: 20,
      minZoom: 20,
      crs: L.CRS.Simple,
      container: this.mapcontainer
    }).setView([0, 0], 20);

    var southWest = map.unproject([0, 1202], map.getMaxZoom());
    var northEast = map.unproject([628, 0], map.getMaxZoom());
    map.setMaxBounds(new L.LatLngBounds(southWest, northEast));

    L.imageOverlay(carte).addTo(map);

}*/

    var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 0,
    container: this.mapcontainer

    });

    var bounds = [[0,0], [628,1202]];
    var image = L.imageOverlay(carte, bounds).addTo(map);

    map.fitBounds(bounds);

    var sol = L.latLng([ 145, 175.2 ]);
    L.marker(sol).addTo(map);
  }


  render(){
    /*const style ={
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };*/

    return(
      <div>
        <div ref={el => this.mapcontainer = el} />
        <div className='marker' />
      </div>
    );
  }

}
export default Map;
