import Image from "next/image";

import classes from "./Hero.module.css";

const Hero = () =>  {
  return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/zoo_logo.png"
					alt="Mykolaiv zoo"
					width={500}
					height={240}
				/>
			</div>
			<h1>Mykolaiv Zoo Blog</h1>
			<p>The blog about animals and our Zoo</p>
		</section>
	);
}

export default Hero;
