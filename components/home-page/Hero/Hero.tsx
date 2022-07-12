import Image from "next/image";
import { Box, Typography } from "@mui/material";
import classes from "./Hero.module.css";

const Hero = () =>  {
  return (
		<Box className={classes.hero}>
			<Box className={classes.image}>
				<Image
					src="/images/site/zoo_logo.png"
					alt="Mykolaiv zoo"
					width={500}
					height={240}
				/>
			</Box>
			<Typography variant="h1" >Mykolaiv Zoo Blog</Typography>
			<Typography variant="body1">The blog about animals and our Zoo</Typography>
		</Box>
	);
}

export default Hero;
