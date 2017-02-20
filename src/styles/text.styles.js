import * as colors from './colors.styles.js';

export const header = {
	fontSize: "32px",
	fontWeight: "500",
}

export const subheader = {
	fontSize: "24px",
	fontWeight: "400",
}

export const body = {
	fontSize: "16px",
	fontWeight: "300",
}

export const caption = {
	fontSize: "12px",
	fontWeight: "200",
}

export const link = {
	textDecoration: "none",
	cursor: "pointer",
	color: colors.blue,
	padding: "4px",
	borderRadius: "4px",
	":hover": {
		background: "rgba(0, 0, 0, .1)"
	}
}
