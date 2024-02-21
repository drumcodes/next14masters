import { ProductListCover } from "@/ui/components/page/product/ProductListCover";
import { ProductDescription } from "@/ui/components/page/product/ProductDescription";
import { staticProducts } from "@/app/static-products/staticProducts";

export default async function SingleStaticProductPage({
	params,
}: {
	params: { productIdx: number };
}) {
	const product = staticProducts[params.productIdx];
	return (
		<div>
			<article className="mb-14 max-w-xs">
				<ProductListCover {...product.coverImage} />
				<ProductDescription product={product} />
			</article>
		</div>
	);
}
