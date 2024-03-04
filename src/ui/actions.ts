"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { executeGraphql } from "@/api/utils";
import {
	CartAddItemDocument,
	CartChangeItemQuantityDocument,
	CartCreateDocument,
	ProductGetDocument,
} from "@/gql/graphql";

type ChangeItemQuantityProps = {
	id: string;
	productId: string;
	quantity: number;
};
export async function changeItemQuantity(
	props: ChangeItemQuantityProps,
) {
	return executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: {
			...props,
		},
	}).finally(() => revalidateTag("cart"));
}

export async function getOrCreateCart() {
	const cartId = cookies().get("cartId")?.value;
	const { cartFindOrCreate: cart } = await executeGraphql({
		query: CartCreateDocument,
		variables: {
			id: cartId ?? "",
			input: {},
		},
	});
	if (!cart) {
		throw new Error("Cart does not exists or failed to create cart!");
	}

	return cart;
}

export async function addProductToCart(
	cartId: string,
	productId: string,
	quantity: number,
) {
	const { product } = await executeGraphql({
		query: ProductGetDocument,
		variables: {
			id: productId,
		},
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql({
		query: CartAddItemDocument,
		variables: {
			id: cartId,
			input: {
				item: {
					productId: productId,
					quantity: quantity,
				},
			},
		},
	});
}
