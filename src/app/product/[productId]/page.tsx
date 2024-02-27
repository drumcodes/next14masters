import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { ProductDescription } from "@/ui/components/page/product/ProductDescription";
import { ProductDetailCover } from "@/ui/components/page/product/ProductDetailCover";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products.data.map((product) => ({ productId: product.id }));
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	return getProductById(params.productId);
};

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const product = await getProductById(params.productId);
	return (
		<div className="flex">
			<article className="mb-14 max-w-md text-xl">
				{product.images[0] && (
					<ProductDetailCover {...product.images[0]} />
				)}
			</article>
			<ProductDescription product={product} />
		</div>
	);
}
