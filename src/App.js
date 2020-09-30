import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import LocationProvider from "./components/LocationContext";
import Maps from "./components/Maps";
import Searchbar from "./components/Searchbar";

export default function App() {
	return (
		<div>
			<ThemeProvider>
				<CSSReset />
				<LocationProvider>
					<Searchbar />
					<Maps />
				</LocationProvider>
			</ThemeProvider>
		</div>
	);
}
