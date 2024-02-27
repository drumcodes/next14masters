import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/utils";
import { ProductsGetByCategorySlugDocument } from "@/gql/graphql";
import { ProductList } from "@/ui/components/page/products/ProductList";

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

	return (
		<>
			<ProductList products={productsResponse.category?.products} />
			{/* <ProductsPgination count={productsCount} /> */}
		</>
	);
}


// {
// 	label: "T-shirts",
// 	href: "/products/t-shirts",
// },
// {
// 	label: "Hoodies",
// 	href: "/products/hoodies",
// },
// {
// 	label: "Accessories",
// 	href: "/products/accessories",
// },