import SearchIcon from "icons/SeachIcon";
import { ReactFormEvent, ReactInputEvent, ReactSetEvent } from "utils";

interface props {
	input: string
	onChange: ReactSetEvent<string>
	onSubmit?: (value: string) => void
}

export const SearchBar: React.FC<props> = ({ input, onChange, onSubmit }) => {
	function onInputChange(e: ReactInputEvent) {
		onChange(e.currentTarget.value);
	}

	function onFormSubmit(e: ReactFormEvent) {
		e.preventDefault();
		onSubmit && onSubmit(input);
	}

	return (
		<form
			onSubmit={onFormSubmit}
			className="flex-center gap-2 bg-white text-black h-2/3 rounded-md p-2"
		>
			<input
				type="search"
				value={input}
				onChange={onInputChange}
				className="focus:outline-none"
			/>
			<button type="submit">
				<SearchIcon />
			</button>
		</form>
	);
};
