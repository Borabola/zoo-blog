import { FC, MouseEvent } from "react";
import { Button as MuiButton, Box, } from "@mui/material";
import Loader from "../Loader/Loader";
import { buttonStyles } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
	children,
	isLoading = false,
	isShowText = false,
	...rest
}) => {
	const onInnerBoxClickHandler = (event: MouseEvent) => rest.disabled && event.stopPropagation();

	return (
		<MuiButton
			sx={{
				...buttonStyles.tableBtn,
			}}
			{...rest}
		>
			{(!isLoading || isShowText) && (
				<Box
					component="span"
					mr={isShowText ? 1 : 0}
					onClick={onInnerBoxClickHandler}
				>
					{children}
				</Box>
			)}
			{isLoading && <Loader
				color="inherit"
				size={20}
			/>}
		</MuiButton>
	);
};

export default Button;
