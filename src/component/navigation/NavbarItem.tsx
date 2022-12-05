interface props {
	label: string
	link: string
}

export const NavbarItem: React.FC<props> = ({ label, link }) => {
	return (
		<ul className="flex-center h-full w-32 border-x border-x-black text-grey hover:text-white">
			<button>
				<a href={link}>{label}</a>
			</button>
		</ul>
	);
};

