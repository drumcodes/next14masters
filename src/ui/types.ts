export type ProductItem = {
	id: string;
	category: string;
	name: string;
	price: number;
	coverImage: {
		alt: string;
		src: string;
	};
	description: string;
};

export type NavBarLink = {
	label: string;
	href: string;
	exact?: boolean;
};
