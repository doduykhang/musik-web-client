import { SearchBar } from "component/common";
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
	return (
		<>
			<nav className="bg-secondary text-white h-nav flex items-center gap-2 px-40">
						<li className="flex h-full ">
					{NAV_ITEMS.map((item, index) => {
						return <NavbarItem key={index} label={item.label} link={item.link} />;
					})}
				</li>
				<            SearchBar />
			</nav>
			{children}
		</>
	);
};
