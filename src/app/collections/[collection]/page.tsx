import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/utils";
import { ProductsGetByCollectionSlugDocument } from "@/gql/graphql";
import { ProductList } from "@/ui/components/page/products/ProductList";

export default async function CollectionPage({
	params,
}: {
	params: { collection: string };
}) {
	const productsResponse = await executeGraphql({
		query: ProductsGetByCollectionSlugDocument,
		variables: {
			slug: params.collection,
		},
		next: {
			revalidate: 15,
		},
	});

	if (!productsResponse.collection?.products) {
		throw notFound();
	}

	return (
		<>
			<title>{productsResponse.collection.name}</title>
			<h1 className="mb-10 text-xl font-bold">
				{productsResponse.collection.name}
			</h1>
			<ProductList products={productsResponse.collection?.products} />
		</>
	);
}
