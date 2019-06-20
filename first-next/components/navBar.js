import Link from 'next/link';
const NavBar = () => {
	const styles = {
		display: "flex",
		backgroundColor: "grey",
		justifyContent: "space-between",
		padding: "1rem"
	}
	return(
		<div style={styles}>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/contact">
				<a>Contact</a>
			</Link>
		</div>
	)
}

export default NavBar;