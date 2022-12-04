import {
	ButtonBorderSize,
	ButtonSize,
	ButtonType,
	BUTTON_BORDER_SIZE,
	BUTTON_SIZE,
	BUTTON_TYPE
} from "constants/button";

interface props {
	children?: React.ReactNode
	type?: ButtonType
	size?: ButtonSize
	borderRadius?: ButtonBorderSize
	className?: string
}

export const Button: React.FC<props> = ({
	children,
	type = "primary",
	size = "small",
	borderRadius = "small",
	className = ""
}) => {
	return (
		<button
			className={`
				${BUTTON_TYPE[type].bgColor}
				${BUTTON_TYPE[type].color}
				${BUTTON_TYPE[type].outline}
				${BUTTON_SIZE[size]}
				${BUTTON_BORDER_SIZE[borderRadius]}
				${className}
			`}
		>
			{children}
		</button>
	);
};

