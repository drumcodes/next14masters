import { cookies } from "next/headers";
import { executeGraphql } from "./utils";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	ProductGetDocument,
} from "@/gql/graphql";

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

export async function getOrCreateCart() {
	// TODO
	// Change mutation to createOrFind
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { cart } = await executeGraphql({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			next: {
				tags: ["cart"],
			},
		});
		if (cart) {
			return cart;
		}
	}

	const { cartFindOrCreate: cart } = await executeGraphql({
		query: CartCreateDocument,
		variables: {
			input: {
				items: [],
			},
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
