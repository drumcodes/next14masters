import { ShoppingCart } from "lucide-react";
import { SearchBox } from "../atoms/SearchBox";
import { ActiveLink } from "./ActiveLink";
import { navbarLinks } from "@/ui/navbarLinks";
import { getOrCreateCart } from "@/ui/actions";

export async function NavBar() {
	const cart = await getOrCreateCart();

	const quantity = cart.items.reduce(
		(acc, item) => acc + item.quantity,
		0,
	);

	return (
		<nav className="flex">
			<div className="flex text-sm font-bold md:block">
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
								<li className="px-5 py-5 hover:bg-slate-100 hover:bg-opacity-50 hover:text-cyan-600">
									{item.label}
								</li>
							</ActiveLink>
						);
					})}
				</ul>
			</div>
			<div className="flex">
				<SearchBox searchDelay={500} redirectHref="/search" />
				<div className="flex-row px-2  hover:bg-slate-100  hover:bg-opacity-50 hover:text-cyan-600">
					<ActiveLink
						href="/cart"
						activeClassName={"border-b-2 bg-gray-300 border-cyan-50"}
					>
						<div className="mt-2 flex p-2">
							<ShoppingCart
								className="h-6 w-6  text-black "
								aria-hidden={true}
								size={64}
							/>
							<span className="ml-2 font-medium">{quantity}</span>
							<span className="sr-only">
								items in cart , view in bag
							</span>
						</div>
					</ActiveLink>
				</div>
			</div>
		</nav>
	);
}
