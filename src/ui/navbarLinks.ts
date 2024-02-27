import { type NavBarLink } from "./types";

export const navbarLinks: NavBarLink[] = [
	{
		label: "Home",
		href: "/",
		exact: true,
	},
	{
		label: "All",
		href: "/products",
	},
	{
		label: "Categories",
		href: "/categories",
	}
];
