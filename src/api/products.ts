import { notFound } from "next/navigation";
import { executeGraphql } from "./utils";

import {
	ProductGetDocument,
	type ProductListItemFragmentFragment,
	ProductsGetListDocument,
} from "@/gql/graphql";

export const getProductsList = async () => {
	const productsResponse = await executeGraphql({
		query: ProductsGetListDocument,
	});

	return productsResponse.products;
};

export const getProductById = async (
	_id: ProductListItemFragmentFragment["id"],
): Promise<ProductListItemFragmentFragment> => {
	const productResponse = await executeGraphql({
		query: ProductGetDocument,
		variables: {
			id: _id,
		},
	});

	if (!productResponse.product) {
		return notFound();
	}

	return productResponse.product;
};
