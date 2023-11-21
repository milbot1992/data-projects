import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../../../Styling/Map.css';

const MeteorMap = ({ meteorList }) => {

    return (
        <div className="map-container">
        <MapContainer
            center={[0, 0]}
            zoom={2}
            className="map"
            scrollWheelZoom={false}
        >
            <TileLayer
            url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
            />
            
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            minZoom={0}
            maxZoom={20}
            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            ext="png"
            />
            
            {meteorList.map((meteor, index) => {
            if (meteor.geolocation && meteor.geolocation.latitude && meteor.geolocation.longitude) {
                const lat = parseFloat(meteor.geolocation.latitude);
                const lng = parseFloat(meteor.geolocation.longitude);

                const markerOptions = {
                radius: 5,
                color: '#DA9C48',
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
