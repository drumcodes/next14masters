import { redirect } from "next/navigation";
import { getProductsList } from "@/api/products";
import { ProductsPagination } from "@/ui/components/ProductsPagination";
import { ProductList } from "@/ui/views/products/ProductList";

export default async function ProductsPage({
	params,
}: {
	params: { page?: string };
}) {
	const products = await getProductsList(params.page);

	const isPagePositiveNumber =
		!Number.isNaN(params.page ?? 1) && Number(params.page ?? 1) > 0;

	const shouldRedirectToBase = !isPagePositiveNumber;

	if (shouldRedirectToBase) {
		redirect("/products");
	}
	return (
		<>
			<ProductList products={products} />
			<ProductsPagination count={100} />
		</>
	);
}
