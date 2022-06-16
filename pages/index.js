import Link from "next/link";

const  HomePage = () => {
  return (
		<div>
			<h1>The Home Page</h1>
			<ul>
				<li>
					{/*"-" - http request to load this page
					<a href="/portfolio">Portfolio</a>*/}

					<Link href="/portfolio">Portfolio</Link>
					<Link href="/clients">Clients</Link>
				</li>
			</ul>
		</div>
	);
};

export default HomePage;
