import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/utils";
import { ProductsGetListDocument } from "@/gql/graphql";
import { ProductList } from "@/ui/components/page/products/ProductList";

export default async function HomePage() {
	const productsResponse = await executeGraphql({
		query: ProductsGetListDocument,
	});

	if (!productsResponse.products.data) {
		throw notFound();
	}

	return <ProductList products={productsResponse.products.data} />;
}
