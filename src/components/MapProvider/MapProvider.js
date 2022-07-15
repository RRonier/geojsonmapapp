import React from "react";
import {
  MapContainer as LeafletMap,
  Marker,
  TileLayer,
  GeoJSON,
} from "react-leaflet";

import classes from "./MapProvider.module.css";

import { URL, ATTRIBUTION } from "../../utils/utils";

const MapProvider = ({ marker, coordinates }) => {
  const geoJson =
    marker && marker.length !== 0 ? <GeoJSON data={marker} /> : null;
  return (
    <LeafletMap center={[52.46922, 13.31615]} zoom={16} className={classes.map}>
      <TileLayer url={URL} attribution={ATTRIBUTION} />
      {geoJson}
      <Marker position={[coordinates.latitude, coordinates.longitude]} />
    </LeafletMap>
  );
};

export default MapProvider;
