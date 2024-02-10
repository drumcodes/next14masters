export type ProductItem = {
	id: string;
	category: string;
	name: string;
	price: number;
	coverImage: {
		height: number;
		width: number;
		alt: string;
		src: string;
	};
};
