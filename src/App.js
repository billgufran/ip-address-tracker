import { ChakraProvider } from "@chakra-ui/core";
import React from "react";
import LocationProvider from "./components/LocationContext";
import LocationDetails from "./components/LocationDetails";
import Maps from "./components/Maps";
import Searchbar from "./components/Searchbar";

export default function App() {
	return (
		<div>
			<ChakraProvider>
				<LocationProvider>
					<Searchbar />
					<LocationDetails />
					<Maps />
				</LocationProvider>
			</ChakraProvider>
		</div>
	);
}
