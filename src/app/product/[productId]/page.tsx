import { getProductById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/components/ProductCoverImage";
import { ProductDescription } from "@/ui/components/ProductListItemDescription";

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
		</div>
	);
}
