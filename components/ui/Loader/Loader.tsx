import { FC } from "react";
import { CircularProgress } from "@mui/material";
import { LoaderProps } from "./Loader.types";

export const Loader: FC<LoaderProps> = ({
	size,
	color
}) => {
	return (
		<CircularProgress
			disableShrink
			size={size}
			color={color}
			data-testid="image"
		/>
	);
};

export default Loader;
