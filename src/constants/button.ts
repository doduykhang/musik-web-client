export const BUTTON_TYPE = {
	primary: {
		bgColor: "bg-primary",
		color: "text-white",
		outline: ""
	},
	transparent: {
		bgColor: "bg-transparent",
		color: "text-white",
		outline: "border-white border-2"
	}
};

export const BUTTON_SIZE = {
	small: "px-3 py-2",
	medium: "px-4 py-2",
	large: "px-5 py-2"
};

export const BUTTON_BORDER_SIZE = {
	small: "rounded-sm",
	medium: "rounded-md",
	large: "rounded-lg"
};

export type ButtonType = keyof typeof BUTTON_TYPE
export type ButtonSize = keyof typeof BUTTON_SIZE
export type ButtonBorderSize = keyof typeof BUTTON_BORDER_SIZE


