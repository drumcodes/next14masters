import { notFound } from "next/navigation";
import { executeGraphql } from "./utils";
import { type ProductItem } from "@/ui/types";

import {
	ProductGetDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";

// const productResponseItemToProductItem = (
// 	productResponse: Product,
// ) => {
// 	return {
// 		id: productResponse.id,
// 		name: productResponse.name,
// 		price: productResponse.price,
// 		category: productResponse.categories[0]?.name,
// 		coverImage: {
// 			src: productResponse.images[0]?.url,
// 			alt: productResponse.name,
// 		},
// 		description: productResponse.description,
// 	};
// };

export const getProductsList = async (): Promise<ProductItem[]> => {
	const productsResponse = await executeGraphql(
		ProductsGetListDocument,
		{},
	);

	const products = productsResponse.products.data.map((product) => {
		return {
			description: product.description,
			id: product.id,
			coverImage: {
				src: product.images[0]?.url,
				alt: product.name,
			},
			name: product.name,
			price: product.price,
			slug: product.slug,
			category: product.categories[0]?.name,
		};
	});

	return products;
};

export const getProductById = async (
	id: string,
): Promise<ProductItem> => {
	const productResponse = await executeGraphql(ProductGetDocument, {
		id: id,
	});

	const product = productResponse.product;
	if (!product) {
		return notFound();
	}
	return {
		description: product.description,
		id: product.id,
		coverImage: {
			src: product.images[0]?.url,
			alt: product.name,
		},
		name: product.name,
		price: product.price,
		category: product.categories[0]?.name,
	};
};
