import { notFound } from "next/navigation";
import { Suspense } from "react";
import { executeGraphql } from "@/api/utils";
import {
	ProductsSearchDocument,
	type ProductsSearchQuery,
} from "@/gql/graphql";
import { ProductList } from "@/ui/components/page/products/ProductList";
import { isNotEmpty } from "@/ui/utils";

export default async function SearchResultsPage({
	searchParams,
}: {
	searchParams: { query: string };
}) {
	const notResultsPage = <div>Not found</div>;
	let productsResponse: ProductsSearchQuery;

	try {
		productsResponse = await executeGraphql(ProductsSearchDocument, {
			search: searchParams.query,
		});
	} catch (error) {
		return notResultsPage;
	}

	if (!productsResponse.products.data) {
		throw notFound();
	}

	return (
		<>
			<h1 className="mb-10 text-sm font-bold">
				Search products: {searchParams.query}
			</h1>
			<Suspense
				fallback={
					<div className="relative mr-3 h-5 w-full animate-bounce text-center">
						Searching...
					</div>
				}
			>
				{searchParams.query ? (
					isNotEmpty(productsResponse.products.data) &&
					searchParams.query.length > 1 ? (
						<ProductList products={productsResponse.products.data} />
					) : (
						<div>Not found</div>
					)
				) : (
					<div>Not found</div>
				)}
			</Suspense>
		</>
	);
}
