import { Circle, GoogleMap, useLoadScript } from "@react-google-maps/api";
import React, { useCallback, useContext, useEffect, useRef } from "react";
import { LocationContext } from "./LocationContext";

const mapContainerStyle = {
	width: "100vw",
	height: "100vh",
};

const mapOptions = {
	disableDefaultUI: true,
	zoomControl: true,
};

const circleOptions = {
	strokeColor: "#FF0000",
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: "#FF0000",
	fillOpacity: 0.35,
};

const center = {lat: -5.154112, lng: 119.437187};

export default function Maps() {
	const {location} = useContext(LocationContext);
	const mapRef = useRef();
	const firstRender = useRef(true);

	const {isLoaded, loadError} = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
	});

	const onMapLoad = useCallback(map => {
		mapRef.current = map;
	}, []);

	const panTo = React.useCallback(({lat, lng}) => {
		mapRef.current.panTo({lat, lng});
		mapRef.current.setZoom(12);
	}, []);

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}
		panTo({lat: location.lat, lng: location.lng});
	}, [location]);

	if (loadError) return "Error";
	if (!isLoaded) return "Loading...";

	return (
		<div>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={11}
				center={center}
				onLoad={onMapLoad}
				options={mapOptions}
			>
				<Circle
					center={{lat: location.lat, lng: location.lng}}
					radius={6000}
					options={circleOptions}
				/>
			</GoogleMap>
		</div>
	);
}
