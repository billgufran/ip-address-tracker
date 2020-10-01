import axios from 'axios';
import React, { createContext, useState } from "react";

export const LocationContext = createContext();

const def = {
	location: {lat: "", lng: "", city: "", region: "", postalCode: ""}, isp: ""
};

export default function LocationProvider(props) {
	const [location, setLocation] = useState(def);
	const [isLoading, setIsLoading] = useState(false);
	const [showDetails, setShowDetails] = useState(false);
   const [ipNotFound, setIpNotFound] = useState(false);

	const getLocation = async ipAddress => {
		try {
			const res = await axios.get(
				`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_GEOLOCATION}&ipAddress=${ipAddress}`
         );
         console.log(res)
			setShowDetails(true);
			setLocation(res.data);
		} catch (error) {
			setIpNotFound(true);
		} finally {
			setIsLoading(false);
			console.log(location);
		}
	};

	const value = {
		getLocation,
		location,
		isLoading,
		setIsLoading,
		showDetails,
		ipNotFound,
		setIpNotFound,
	};

	return (
		<LocationContext.Provider value={value}>
			{props.children}
		</LocationContext.Provider>
	);
}
