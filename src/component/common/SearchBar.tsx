import SearchIcon from "icons/SeachIcon";
import { useState } from "react";

export const SearchBar: React.FC = () => {
	const [input, setInput] = useState("");

	function onInputChange(e: React.FormEvent<HTMLInputElement>) {
		setInput(e.currentTarget.value);
	}

	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<form
			onSubmit={onSubmit}
			className="flex-center gap-2 bg-white text-black h-2/3 rounded-md p-2"
		>
			<input value={input} onChange={onInputChange} className="focus:outline-none"/>
			<button type="submit">
				<SearchIcon/>
			</button>
		</form>
	);
};

