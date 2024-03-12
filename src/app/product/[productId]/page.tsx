import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductDescription } from "@/ui/components/page/product/ProductDescription";
import { ProductDetailCover } from "@/ui/components/page/product/ProductDetailCover";
import { SuggestedProductsList } from "@/ui/components/page/products/SuggestedProductsList";
import { AddToCartButton } from "@/ui/components/page/product/AddToCartButton";
import {
	addProductToCart,
	changeItemQuantity,
	getOrCreateCart,
} from "@/ui/actions";
import { ProductReview } from "@/ui/components/page/product/ProductReview";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			description: product.description,
			images: product.images.map((image) => {
				return {
					url: image.url,
					width: 640,
					height: 480,
				};
			}),
			locale: "en_US",
			type: "website",
		},
	};
};

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const product = await getProductById(params.productId);

	async function addProductToCartAction() {
		"use server";
		const cart = await getOrCreateCart();
		cookies().set("cartId", cart.id, {
			httpOnly: true,
			sameSite: "lax",
			secure: true,
		});
		const productInCart = cart.items.filter(
			(item) => item.product.id == params.productId,
		)[0];

		if (productInCart) {
			await changeItemQuantity({
				id: cart.id,
				productId: params.productId,
				quantity: productInCart.quantity + 1,
			});
		} else {
			await addProductToCart(cart.id, params.productId, 1);
		}
		revalidateTag("cart");
	}

	return (
		<>
			<div className="flex">
				<article className="mb-14 max-w-md text-xl">
					{product.images[0] && (
						<ProductDetailCover {...product.images[0]} />
					)}
				</article>
				<div className="ml-5 flex-row">
					<ProductDescription product={product} />
					<form action={addProductToCartAction}>
						<AddToCartButton />
					</form>
				</div>
			</div>
			<SuggestedProductsList />
			<ProductReview />
		</>
	);
}
