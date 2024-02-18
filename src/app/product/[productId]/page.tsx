import { Suspense } from "react";
import { getProductById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/components/ProductCoverImage";
import { ProductDescription } from "@/ui/components/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/components/SuggestedProductsList";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products.map((product) => ({ productId: product.id }));
};

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const product = await getProductById(params.productId);
	return (
		<div>
			<title>{product.name}</title>
			<article className="mb-14 max-w-xs">
				<ProductCoverImage {...product.coverImage} />
				<ProductDescription product={product} />
			</article>
			<aside>
				<Suspense fallback={<div aria-busy>{"Loading..."}</div>}>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</div>
	);
}
