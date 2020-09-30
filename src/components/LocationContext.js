import React, { createContext, useState } from 'react';

export const LocationContext = createContext();

export default function LocationProvider(props) {
   const [ location, setLocation ] = useState({})
   const [ isLoading, setIsLoading ] = useState(false)
   const [ showDetails, setShowDetails ] = useState(false)

   const getLocation = async (ipAddress) => {
		try {
			const data = await fetch(
				`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_GEOLOCATION}&ipAddress=${ipAddress}`
         );
         const res = await data.json();
         setLocation(res)
         console.log({ lat: res.location.lat, lng: res.location.lng })
         setIsLoading(false)
         setShowDetails(true)
		} catch (error) {
         console.error(error);
		}
   };

   const value = {getLocation, location, isLoading, setIsLoading, showDetails }

   return (
      <LocationContext.Provider value={value}>
			{props.children}
		</LocationContext.Provider>
   )
}