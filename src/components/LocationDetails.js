import { Box, Flex, Heading, Text } from "@chakra-ui/core";
import React, { useContext } from "react";
import { LocationContext } from "./LocationContext";

function Data({type, value}) {
	return (
		<Box w={{base: "100%", md: "33%"}} px={5} py={3}>
			<Text m={0} fontSize="xs" letterSpacing="0.05em" color="gray.500">
				{type.toUpperCase()}
			</Text>
			<Heading
				fontWeight="medium"
				fontSize={{base: "md", md: "xl"}}
				color="gray.800"
			>
				{value}
			</Heading>
		</Box>
	);
}

function LocationDetails() {
	const {location, showDetails} = useContext(LocationContext);

	return (
		<div className="above mid top">
			{showDetails && (
				<Flex
					shadow="md"
					direction={{base: "column", md: "row"}}
					w={{base: "85%", md: 650}}
					className="container"
				>
					<Data
						type="Location"
						value={`${location.location.city}, ${location.location.region} ${location.location.postalCode}`}
					/>
					<Data type="ISP" value={`${location.as.name}`} />
					<Data
						type="Coordinate"
						value={`${location.location.lat}, ${location.location.lng}`}
					/>
				</Flex>
			)}
		</div>
	);
}

export default LocationDetails;
