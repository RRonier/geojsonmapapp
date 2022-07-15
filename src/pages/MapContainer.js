import React, { useState, useEffect } from "react";
import MapProvider from "../components/MapProvider/MapProvider";
import { getOsmData } from "../services/services";
import osmtogeojson from "osmtogeojson";

import styles from "./MapContainer.module.css";

const MapContainer = () => {
  const [marker, setMarker] = useState([]);
  const [points, setPoints] = useState([]);
  const [coordinates, setCoordinates] = useState({
    latitude: 52.46732,
    longitude: 13.31759,
  });
  const { mapContainer, selectContainer } = styles;

  useEffect(() => {
    getOsmData()
      .then(({ data }) => {
        const response = new DOMParser().parseFromString(
          data,
          "application/xml"
        );
        return response;
      })
      .then((XMLResponse) => {
        const jsonData = osmtogeojson(XMLResponse);
        return jsonData;
      })
      .then((jsonData) => {
        const coordinatePoligons = jsonData.features.filter(
          (feature) =>
            feature.geometry.type !== "Point" &&
            feature.geometry.type !== "LineString"
        );
        const coordinatePoints = jsonData.features.filter(
          (feature) => feature.geometry.type === "Point"
        );
        setPoints(coordinatePoints);
        setMarker(coordinatePoligons);
      });
  }, []);

  const handleForm = (event) => {
    let { name, value } = event.target;
    setCoordinates((state) => ({
      ...state,
      [name]: parseFloat(value),
    }));
  };

  const latitude = points.map((point, i) => (
    <option key={i} value={point.geometry.coordinates[1]}>
      {point.geometry.coordinates[1]}
    </option>
  ));
  const longitude = points.map((point, i) => (
    <option key={i} value={point.geometry.coordinates[0]}>
      {point.geometry.coordinates[0]}
    </option>
  ));

  return (
    <div className={mapContainer}>
      <MapProvider marker={marker} coordinates={coordinates} />
      <div className={selectContainer}>
        <div>
          <label htmlFor="latitude">Latitude</label>
          <select
            name="latitude"
            onChange={handleForm}
            value={coordinates.latitude}
          >
            {latitude}
          </select>
        </div>
        <div>
          <label htmlFor="longitude">Longitude</label>
          <select
            name="longitude"
            onChange={handleForm}
            value={coordinates.longitude}
          >
            {longitude}
          </select>
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
