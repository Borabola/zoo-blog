import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { PostItemProps } from "../../../types";
import { postItemStyles as styles } from "./PostItem.styles"

export const PostItem: FC<PostItemProps> = ({ post } ) => {
	const { title, image, excerpt, date, slug } = post;
	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const imagePath = `/images/posts/${slug}/${image}`;
	const linkPath = `/posts/${slug}`;

	return (
		<Box sx={styles.post} key={title}>
				<Link href={linkPath}>
					<a>
						<Box sx={styles.image}>
							<Image
								src={imagePath}
								alt={title}
								width={300}
								height={200}
								layout="responsive"
							/>
						</Box>
						<Box sx={styles.content}>
							<Typography variant="h3" mb={1}>{title}</Typography>
							<time>{formattedDate}</time>
							<Typography mt={2} mb={1}>{excerpt}</Typography>
						</Box>
					</a>
				</Link>
		</Box>
	);
};

export default PostItem;
