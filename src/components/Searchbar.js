import {
	FormControl,
	IconButton,
	Input,
	InputGroup,
	InputRightElement
} from "@chakra-ui/core";
import { Search2Icon } from '@chakra-ui/icons';
import React, { useContext, useRef } from "react";
import { LocationContext } from "./LocationContext";

function Searchbar() {
	const {getLocation, isLoading, setIsLoading} = useContext(LocationContext);
	const inputRef = useRef("");

	const handleChange = event => (inputRef.current = event.target.value);

	const handleSubmit = event => {
		event.preventDefault();
		setIsLoading(true);
		getLocation(inputRef.current);
	};

	return (
		<div className="above mid top">
			<form value={inputRef} onChange={handleChange} onSubmit={handleSubmit}>
				<FormControl isDisabled={isLoading}>
					<InputGroup>
						<Input
							type="text"
							placeholder="Search any IP address"
							className="container"
							rounded="20px"
						/>
						<InputRightElement>
							<IconButton
								aria-label="Search location"
								icon={<Search2Icon/>}
								isRound
								type="submit"
								isLoading={isLoading}
								variant="ghost"
							/>
						</InputRightElement>
					</InputGroup>
				</FormControl>
			</form>
		</div>
	);
}

export default Searchbar;
