interface props {
	children: React.ReactNode
	activator: React.ReactNode
	isOpen: boolean
}

export const DropDown: React.FC<props> = ({ children, activator, isOpen }) => {
	return (
		<div className="relative">
			{activator}
			{isOpen && (
				<div className="absolute top-full text-black w-full mt-1">{children}</div>
			)}
		</div>
	);
};
