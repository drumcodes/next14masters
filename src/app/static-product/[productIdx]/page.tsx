import { ProductCoverImage } from "@/ui/components/ProductCoverImage";
import { ProductDescription } from "@/ui/components/ProductListItemDescription";
import { staticProducts } from "@/app/products/staticProducts";

export default async function SingleStaticProductPage({
	params,
}: {
	params: { productIdx: number };
}) {
	const product = staticProducts[params.productIdx];
	return (
		<div>
			<article className="mb-14 max-w-xs">
				<ProductCoverImage {...product.coverImage} />
				<ProductDescription product={product} />
			</article>
		</div>
	);
}
