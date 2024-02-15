type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

const productResponseItemToProductItem = (
	productResponse: ProductResponseItem,
) => {
	return {
		id: productResponse.id,
		name: productResponse.title,
		price: productResponse.price,
		category: productResponse.category,
		coverImage: {
			src: productResponse.image,
			alt: productResponse.title,
		},
	};
};

export const getProductsList = async () => {
	const res = await fetch(
		"https://naszsklep-api.vercel.app/api/products",
	);
	const productsResponse =
		(await res.json()) as ProductResponseItem[];

	return productsResponse.map(productResponseItemToProductItem);
};

export const getProductById = async (
	id: ProductResponseItem["id"],
) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const productResponse = (await res.json()) as ProductResponseItem;
	return productResponseItemToProductItem(productResponse);
};
