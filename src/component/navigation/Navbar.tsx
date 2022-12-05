import { SearchBar } from "component/shared";
import { DropDown } from "component/shared/DropDown";
import { SongDropDown } from "component/shared/SongDropDown";
import { useState } from "react";
import { useFindSongs } from "repositories";
import { useDebounce } from "utils";
import { NavbarItem } from "./NavbarItem";

interface props {
	children: React.ReactNode
}

const NAV_ITEMS = [
	{
		label: "Home",
		link: "/home"
	},
	{
		label: "Playlist",
		link: "/playlist"
	}
];

export const Navbar: React.FC<props> = ({ children }) => {
	const [searchInput, setSearchInput] = useState("");

	const { data } = useSearch(searchInput);

	return (
		<>
			<nav className="bg-secondary text-white h-nav flex items-center gap-2 px-40">
				<li className="flex h-full ">
					{NAV_ITEMS.map((item, index) => {
						return <NavbarItem key={index} label={item.label} link={item.link} />;
					})}
				</li>
				<DropDown
					activator={<SearchBar input={searchInput} onChange={setSearchInput} />}
					isOpen={!!data && !!searchInput}
				>
					<SongDropDown songs={data || []} />
				</DropDown>

				<div className="ml-auto flex-center gap-2">
					<button className="btn-secondary btn-outline btn-sm rounded-sm">
						Sign in
					</button>
					<button className="btn-primary btn-sm rounded-sm">Create Account</button>
				</div>
			</nav>
			{children}
		</>
	);
};

const useSearch = (searchInput: string) => {
	const searchValue = useDebounce(searchInput, 300);
	const { data, error, isLoading } = useFindSongs(
		searchValue,
		1,
		10,
		!!searchValue
	);

	return {
		data,
		error,
		isLoading
	};
};
