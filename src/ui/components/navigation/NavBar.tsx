import { ShoppingCart } from "lucide-react";
import { SearchBoxRedirect } from "../atoms/SearchBoxRedirect";
import { ActiveLink } from "./ActiveLink";
import { type NavBarLink } from "@/ui/types";

export const NavBar = ({
	navbarLinks: navbarLinks,
}: {
	navbarLinks: NavBarLink[];
}) => {
	return (
		<nav className="flex justify-center">
			<div className="mx-auto flex max-w-md items-center justify-center text-sm font-bold md:block">
				<ul className="flex">
					{navbarLinks.map((item) => {
						return (
							<ActiveLink
								key={item.href}
								href={item.href}
								exact={item.exact}
								activeClassName={"border-b-2 border-cyan-300"}
								className={"min-w-fit"}
							>
								<li className=" px-5 py-5 hover:bg-slate-50 hover:bg-opacity-50 hover:text-cyan-300">
									{item.label}
								</li>
							</ActiveLink>
						);
					})}
				</ul>
			</div>
			<SearchBoxRedirect searchDelay={500} redirectHref="/search" />
			<div className="flex">
				<ActiveLink
					href="#"
					className="h-max px-5 py-5 text-black hover:bg-slate-50 hover:bg-opacity-50 hover:text-cyan-300"
					activeClassName={"border-b-2 border-cyan-300"}
				>
					<ShoppingCart className="h-6 w-6 flex-shrink-0" size={48} />
				</ActiveLink>
			</div>
		</nav>
	);
};
