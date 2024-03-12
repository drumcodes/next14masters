import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { getProductById } from "@/api/products";
import { ProductDescription } from "@/ui/components/page/product/ProductDescription";
import { ProductDetailCover } from "@/ui/components/page/product/ProductDetailCover";
import { SuggestedProductsList } from "@/ui/components/page/products/SuggestedProductsList";
import { AddToCartButton } from "@/ui/components/page/product/AddToCartButton";
import { addProductToCart, getOrCreateCart } from "@/ui/actions";

// TODO
// commented out since it's currently dynamic
// export const generateStaticParams = async () => {
// 	const products = await getProductsList();
// 	return products.data.map((product) => ({ productId: product.id }));
// };
// export const generateMetadata = async ({
// 	params,
// }: {
// 	params: { productId: string };
// }): Promise<Metadata> => {
// 	const product = await getProductById(params.productId);
// 	return {
// 		title: product.name,
// 		description: product.description,
// 	};
// };

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
		await addProductToCart(cart.id, params.productId, 1).finally(() =>
			revalidateTag("cart"),
		);
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
		</>
	);
}
