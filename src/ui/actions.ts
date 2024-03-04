"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { executeGraphql } from "@/api/utils";
import { CartChangeItemQuantityDocument } from "@/gql/graphql";
import { addProductToCart, getOrCreateCart } from "@/api/cart";

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

export async function addProductToCartAction(productId: string) {
	const cart = await getOrCreateCart();
	cookies().set("cartId", cart.id, {
		// httpOnly: true,
		// sameSite: "lax",
		// secure: true,
	});
	await addProductToCart(cart.id, productId, 1).finally(() =>
		revalidateTag("cart"),
	);
}
