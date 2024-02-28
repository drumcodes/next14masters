import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/utils";
import { ProductsGetByCategorySlugDocument } from "@/gql/graphql";
import { ProductList } from "@/ui/components/page/products/ProductList";
import { Pagination } from "@/ui/components/navigation/Pagination";

export const generateStaticParams = async ({
	params,
}: {
	params: { category: string; pageNumber: string };
}) => {
	if (params.category === "t-shirts") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else {
		return [{ pageNumber: "1" }];
	}
};

const limitPerPage = 2;

export default async function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const productsResponse = await executeGraphql(
		ProductsGetByCategorySlugDocument,
		{
			slug: params.category,
		},
	);

	if (!productsResponse.category?.products) {
		throw notFound();
	}

	const allProducts = productsResponse.category.products;
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
			<title>{productsResponse.category.name}</title>
			<h1 className="mb-10 text-xl font-bold">
				{productsResponse.category.name}
			</h1>
			<ProductList products={pageProducts} />
			<Pagination
				href={`categories/${params.category}`}
				count={count}
				limit={limitPerPage}
			/>
		</>
	);
}
