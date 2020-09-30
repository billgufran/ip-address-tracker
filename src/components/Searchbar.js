import {
   IconButton,
   Input,
   InputGroup,
   InputRightElement
} from "@chakra-ui/core";
import React, { useContext, useRef } from "react";
import { LocationContext } from "./LocationContext";

function Searchbar() {
	const {getLocation, isLoading, setIsLoading } = useContext(LocationContext);
	const inputRef = useRef("");

	const handleChange = event => (inputRef.current = event.target.value);

	const handleSubmit = event => {
      event.preventDefault();
      setIsLoading(true)
		getLocation(inputRef.current);
	};

	return (
		<div className="above mid">
			<form value={inputRef} onChange={handleChange} onSubmit={handleSubmit}>
				<InputGroup>
					<Input type="text" placeholder="Search any IP address" />
					<InputRightElement
						children={
							<IconButton
								aria-label="Search location"
								icon="search-2"
								isRound
                        type="submit"
                        isLoading={isLoading}
                        isDisabled
							/>
						}
					/>
				</InputGroup>
			</form>
		</div>
	);
}

export default Searchbar;
