import { notFound } from "next/navigation";
import { Suspense } from "react";
import { executeGraphql } from "@/api/utils";
import { ProductsGetListDocument } from "@/gql/graphql";
import { ProductList } from "@/ui/components/page/products/ProductList";
import { Pagination } from "@/ui/components/navigation/Pagination";

const limitPerPage = 4;

export default async function ProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const productsResponse = await executeGraphql({
		query: ProductsGetListDocument,
		next: {
			revalidate: 15,
		},
	});

	if (!productsResponse.products.data) {
		throw notFound();
	}

	const allProducts = productsResponse.products.data;
	const count = allProducts.length;

	const pageStartProduct =
		Number(params.pageNumber) * limitPerPage - limitPerPage;

	const pageEndProduct = pageStartProduct + limitPerPage;

	const pageProducts = allProducts.slice(
		pageStartProduct,
		pageEndProduct,
	);

	return (
		<>
			<Suspense
				fallback={
					<div className="relative mr-3 h-5 w-full animate-bounce text-center">
						Loading products...
					</div>
				}
			>
				<ProductList products={pageProducts} />
				<Pagination
					href="products"
					count={count}
					limit={limitPerPage}
				/>
			</Suspense>
		</>
	);
}
