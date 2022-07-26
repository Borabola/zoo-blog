import { FC } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { PostHeaderProps } from "./PostHeader.types"
import { postHeaderStyles as styles } from "./PostHeader.styles";

export const PostHeader: FC<PostHeaderProps> = ({ title, image }) => {
	return (
		<Box sx={styles.header}>
			<Typography
				variant="h1"
				sx={styles.title}
			>
				{title}
			</Typography>
			<Image
				src={image}
				alt={title}
				width={200}
				height={150}
			/>
		</Box>
	);
};

export default PostHeader;
