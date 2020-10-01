import {
	FormControl,
	FormErrorMessage,
	IconButton,
	Input,
	InputGroup,
	InputRightElement
} from "@chakra-ui/core";
import { Search2Icon } from "@chakra-ui/icons";
import React, { useContext, useRef } from "react";
import { LocationContext } from "./LocationContext";

function Searchbar() {
	const {
		getLocation,
		isLoading,
		setIsLoading,
		ipNotFound,
		setIpNotFound,
	} = useContext(LocationContext);
	const inputRef = useRef("");

	const handleChange = event => {
		setIpNotFound(false);
		inputRef.current = event.target.value;
	};

	const handleSubmit = event => {
		event.preventDefault();
		setIsLoading(true);
		getLocation(inputRef.current);
	};

	return (
		<div className="above mid bottom">
			<form value={inputRef} onChange={handleChange} onSubmit={handleSubmit}>
				<FormControl isDisabled={isLoading} isInvalid={ipNotFound}>
					<InputGroup>
						<Input
							focusBorderColor="gray.500"
							errorBorderColor="red.300"
							className="container"
							variant="filled"
							type="text"
							placeholder="Search any IP address"
							color="gray.800"
							w={{base: "85vw", md: 350}}
							fontWeight="medium"
						/>
						<InputRightElement>
							<IconButton
								aria-label="Search location"
								icon={<Search2Icon color="gray.500" />}
								isRound
								type="submit"
								isLoading={isLoading}
								variant="ghost"
							/>
						</InputRightElement>
					</InputGroup>
					<FormErrorMessage>IP address not found</FormErrorMessage>
				</FormControl>
			</form>
		</div>
	);
}

export default Searchbar;
