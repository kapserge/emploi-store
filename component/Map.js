import { useState } from "react";

import ReactMapGL from "react-map-gl";
export default function Map() {
        const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        // The latitude and longitude of the center of London
        latitude: 51.5074,
        longitude: -0.1278,
        zoom: 10
        });

return <ReactMapGL
  mapStyle="mapbox://styles/mapbox/streets-v11"
  mapboxApiAccessToken='pk.eyJ1Ijoia2Fwc2VyZ2UiLCJhIjoiY2ttdzEyNGN4MDh2ejJ1cDltZDZzZ2J4MyJ9.hMF6V8PkiH9Y3HvYPQQa9g'
  {...viewport}
  onViewportChange={(nextViewport) => setViewport(nextViewport)}
  >
</ReactMapGL>
}