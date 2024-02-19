import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/components/ProductCoverImage";
import { ProductDescription } from "@/ui/components/ProductListItemDescription";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products.map((product) => ({ productId: product.id }));
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name}`,
		description: `${product.description}`,
		openGraph: {
			title: `${product.name}`,
			description: `${product.description}`,
			images: [product.coverImage.src],
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
	return (
		<div>
			<article className="mb-14 max-w-xs">
				<ProductCoverImage {...product.coverImage} />
				<ProductDescription product={product} />
			</article>
		</div>
	);
}
