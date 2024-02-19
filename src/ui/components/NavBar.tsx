import { type Route } from "next";
import { ActiveLink } from "./ActiveLink";

export const NavBar = () => {
	return (
		<nav className="mb-10">
			<ul className="mt-2 flex justify-center space-x-4">
				<li>
					<ActiveLink href={"/"}>Home </ActiveLink>
				</li>
				<li>
					<ActiveLink href={"/products" as Route}>All</ActiveLink>
				</li>
				<li>
					<ActiveLink href={"/static-products"}>
						Static Products
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
