import { notFound } from "next/navigation";
import { Suspense } from "react";
import SortProducts from "./SortProducts";
import { executeGraphql } from "@/api/utils";
import {
	ProductsGetListDocument,
	type ProductListItemFragmentFragment,
} from "@/gql/graphql";
import { ProductList } from "@/ui/components/page/products/ProductList";
import { Pagination } from "@/ui/components/navigation/Pagination";
import { getAverageProdctRating } from "@/ui/utils";

const limitPerPage = 4;

export default async function ProductsPage({
	params,
	searchParams,
}: {
	params: { category: string; pageNumber: string };
	searchParams: { sort: string };
}) {
	const productsResponse = await executeGraphql({
		query: ProductsGetListDocument,
		next: {
			tags: ["products"],
		},
		cache: "no-store",
	});

	if (!productsResponse.products.data) {
		throw notFound();
	}
	const allProducts = productsResponse.products.data;

	const sorted =
		searchParams.sort === "priceAsc"
			? allProducts.sort((a, b) => a.price - b.price)
			: searchParams.sort === "priceDesc"
				? allProducts.sort((a, b) => b.price - a.price)
				: searchParams.sort === "ratingAsc"
					? allProducts.sort(
							(
								a: ProductListItemFragmentFragment,
								b: ProductListItemFragmentFragment,
							) =>
								getAverageProdctRating(a.reviews) -
								getAverageProdctRating(b.reviews),
						)
					: searchParams.sort === "ratingDesc"
						? allProducts.sort(
								(
									a: ProductListItemFragmentFragment,
									b: ProductListItemFragmentFragment,
								) =>
									getAverageProdctRating(b.reviews) -
									getAverageProdctRating(a.reviews),
							)
						: allProducts;

	const count = allProducts.length;

	const pageStartProduct =
		Number(params.pageNumber) * limitPerPage - limitPerPage;

	const pageEndProduct = pageStartProduct + limitPerPage;

	const pageProducts = sorted.slice(pageStartProduct, pageEndProduct);

	return (
		<>
			<Suspense
				fallback={
					<div className="relative mr-3 h-5 w-full animate-bounce text-center">
						Loading products...
					</div>
				}
			>
				<SortProducts sort={searchParams.sort} />
				<ProductList products={pageProducts} />
				<Pagination
					href="products"
					searchParams={searchParams}
					count={count}
					limit={limitPerPage}
				/>
			</Suspense>
		</>
	);
}
