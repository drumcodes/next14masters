import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/utils";
import { ProductsGetByCollectionSlugDocument } from "@/gql/graphql";
import { ProductList } from "@/ui/components/page/products/ProductList";

export default async function CollectionPage({
	params,
}: {
	params: { collection: string };
}) {
	const productsResponse = await executeGraphql(
		ProductsGetByCollectionSlugDocument,
		{
			slug: params.collection,
		},
	);

	if (!productsResponse.collection?.products) {
		throw notFound();
	}

	return (
		<>
			<ProductList products={productsResponse.collection?.products} />
		</>
	);
}
