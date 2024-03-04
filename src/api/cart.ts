import { cookies } from "next/headers";
import { executeGraphql } from "./utils";
import {
	CartAddItemDocument,
	CartCreateDocument,
	ProductGetDocument,
} from "@/gql/graphql";

export async function addProductToCart(
	cartId: string,
	productId: string,
	quantity: number,
) {
	"use server";
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

export async function getOrCreateCart() {
	"use server";
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

	cookies().set("cartId", cart.id, {
		httpOnly: true,
		sameSite: "lax",
		secure: true,
	});
	return cart;
}
