import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/ui/components/ProductCoverImage";
import { ProductDescription } from "@/ui/components/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/components/SuggestedProductsList";

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const product = await getProductById(params.productId);
	return (
		<div>
			<article className="mb-14 max-w-xs">
				<ProductCoverImage {...product.coverImage} />
				<ProductDescription product={product} />
			</article>
			<aside>
				<Suspense fallback={"Loading..."}>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</div>
	);
}
