import { type NavBarLink } from "./types";

export const navbarLinks: NavBarLink[] = [
	{
		label: "Home",
		href: "/",
		exact: true,
	},
	{
		label: "All",
		href: "/products/",
	},
	{
		label: "Collections",
		href: "/collections/",
	},
	{
		label: "Summer Vibes",
		href: "/collections/summer-vibes",
	},
	{
		label: "Categories",
		href: "/categories/",
	},
	{
		label: "T-Shirts",
		href: "/categories/t-shirts/",
	},
];
