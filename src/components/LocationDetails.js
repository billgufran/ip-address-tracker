import { Box, Heading, Text } from "@chakra-ui/core";
import React, { useContext } from "react";
import { LocationContext } from "./LocationContext";

function Data({type, value}) {
	return (
		<Box w="33%" p={5}>
			<Text m={0} fontSize="xs" letterSpacing="0.05em">{type.toUpperCase()}</Text>
			<Heading fontWeight="medium" fontSize="2xl">{value}</Heading>
		</Box>
	);
}

function LocationDetails() {
	const {location, showDetails} = useContext(LocationContext);

	return (
		<div className="above mid">
			{showDetails && (
				<Box
					shadow="md"
					display="flex"
					w={650}
					h={130}
               className="container"
               rounded="20px"
				>
					<Data
						type="Location"
						value={`${location.location.city}, ${location.location.region}`}
					/>
					<Data
						type="Coordinate"
						value={`${location.location.lat}, ${location.location.lng}`}
					/>
					<Data type="ISP" value={`${location.as.name}`} />
				</Box>
			)}
		</div>
	);
}

export default LocationDetails;
