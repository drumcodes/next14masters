"use server";

import { revalidateTag } from "next/cache";
import { executeGraphql } from "@/api/utils";
import { CartChangeItemQuantityDocument } from "@/gql/graphql";

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
