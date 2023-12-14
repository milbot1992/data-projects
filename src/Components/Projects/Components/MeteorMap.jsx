import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../../../Styling/Map.css';

const MeteorMap = ({ meteorList }) => {
    return (
        <div className="map-container">
        <MapContainer
            center={[0, 0]}
            zoom={1.5}
            className="map"
            scrollWheelZoom={false}
        >
            <TileLayer
            url={`https://api.mapbox.com/styles/v1/milbot1992/clpcay0b0009h01o04ype47cv/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWlsYm90MTk5MiIsImEiOiJjbHBjYXZyYWkwbHhyMmpwcndzYzVnd3prIn0.g1iJntlyYhJMsotj-Pg2NQ`}
            />
            
            <TileLayer
            url="https://api.mapbox.com/styles/v1/milbot1992/clpcay0b0009h01o04ype47cv/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWlsYm90MTk5MiIsImEiOiJjbHBjYXZyYWkwbHhyMmpwcndzYzVnd3prIn0.g1iJntlyYhJMsotj-Pg2NQ"
            minZoom={0}
            maxZoom={20}
            ext="png"
            />
            
            {meteorList.map((meteor, index) => {
            if (meteor.geolocation && meteor.geolocation.latitude && meteor.geolocation.longitude) {
                const lat = parseFloat(meteor.geolocation.latitude);
                const lng = parseFloat(meteor.geolocation.longitude);

                const markerOptions = {
                radius: 1,
                color: '#87ACFC',
                fill: true,
                fillColor: '#F9F3A2',
                fillOpacity: 0.6,
                };

                return (
                <CircleMarker key={index} center={[lat, lng]} pathOptions={markerOptions}>
                    <Popup>
                    <div>
                        <h2>{meteor.name}</h2>
                        <p>Year: {new Date(meteor.year).getFullYear()}</p>
                        <p>Mass: {meteor.mass}g</p>
                        <p>Fall: {meteor.fall}</p>
                    </div>
                    </Popup>
                </CircleMarker>
                );
            } else {
                return null;
            }
            })}
        </MapContainer>
        </div>
    );
};

export default MeteorMap;