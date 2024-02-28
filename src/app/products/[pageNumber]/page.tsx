import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/utils";
import { ProductsGetListDocument } from "@/gql/graphql";
import { ProductList } from "@/ui/components/page/products/ProductList";
import { Pagination } from "@/ui/components/navigation/Pagination";

const limitPerPage = 3;

export default async function ProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const productsResponse = await executeGraphql(
		ProductsGetListDocument,
		{},
	);

	if (!productsResponse.products.data) {
		throw notFound();
	}

	const allProducts = productsResponse.products.data;
	const count = allProducts.length;

	const start =
		Number(params.pageNumber) * limitPerPage - limitPerPage;

	const pageStartProduct =
		start > count ? count - limitPerPage : start;
	const pageEndProduct = start + limitPerPage;

	const pageProducts = allProducts.slice(
		pageStartProduct,
		pageEndProduct,
	);

	return (
		<>
			{`${params.pageNumber} ${count} ${pageStartProduct} ${pageEndProduct}`}
			<ProductList products={pageProducts} />
			<Pagination
				href="products"
				count={count}
				limit={limitPerPage}
			/>
		</>
	);
}
