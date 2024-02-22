import { redirect } from "next/navigation";
import { getProductsList } from "@/api/products";
import { ProductsPagination } from "@/ui/components/navigation/Pagination";
import { ProductList } from "@/ui/components/page/products/ProductList";

const productsCount = 100;
const productsLimit = 20;

export const generateStaticParams = async () => {
	return Array.from(
		{ length: productsCount / (productsLimit ?? 20) },
		(_, index) => ({ page: [`${index + 1}`] }),
	);
};

export default async function ProductsPage({
	params,
}: {
	params: { page?: string };
}) {
	const isPagePositiveNumber =
		!Number.isNaN(params.page ?? 1) && Number(params.page ?? 1) > 0;

	const shouldRedirectToBase = !isPagePositiveNumber;

	if (shouldRedirectToBase) {
		redirect("/products");
	}
	const products = await getProductsList();

	return (
		<>
			<ProductList products={products} />
			<ProductsPagination count={productsCount} />
		</>
	);
}
