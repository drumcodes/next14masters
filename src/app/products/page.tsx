import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/utils";
import { ProductsGetListDocument } from "@/gql/graphql";
import { ProductList } from "@/ui/components/page/products/ProductList";

export default async function CategoryProductPage() {
	const productsResponse = await executeGraphql(
		ProductsGetListDocument,
		{},
	);

	if (!productsResponse) {
		throw notFound();
	}

	return (
		<>
			<ProductList products={productsResponse.products.data} />
			{/* <ProductsPagination count={productsCount} /> */}
		</>
	);
}
