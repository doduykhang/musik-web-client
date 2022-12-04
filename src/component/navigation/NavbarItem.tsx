interface props {
	label: string
	link: string
}

export const NavbarItem: React.FC<props> = ({ label, link }) => {
	return (
		<ul className="flex-center h-full w-32 border-x-[0.5px] border-x-black text-grey hover:text-white">
			<a href={link}>{label}</a>
		</ul>
	);
};

