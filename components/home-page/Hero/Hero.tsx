import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { heroStyles as styles } from "./Hero.styles";

const Hero = () => {
	const intl = useIntl();
	return (
		<Box sx={styles.hero}>
			<Box sx={styles.image}>
				<Image
					src="/images/site/zoo_logo.png"
					alt="Mykolaiv zoo"
					width={500}
					height={240}
				/>
			</Box>
			<Typography
				variant="h1" sx={{
					...styles.text,
					...styles.title
				}}>
				{intl.formatMessage({
					id: "mykolaivZooBlog",
					defaultMessage: "Mykolaiv Zoo Blog"
				})}
			</Typography>
			<Typography
				variant="h3"
				sx={{
					...styles.text,
					...styles.description
				}}>
				{intl.formatMessage({
					id: "blogDescription",
					defaultMessage: "The blog about animals and our Zoo"
				})}
			</Typography>
		</Box >
	);
}

export default Hero;
