import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/utils";
import { CategoriesGetListDocument } from "@/gql/graphql";
import { CategoryList } from "@/ui/components/page/categories/CategoryList";

export default async function CategoriesPage() {
	const categoriesResponse = await executeGraphql(
		CategoriesGetListDocument,
		{},
	);

	if (!categoriesResponse.categories) {
		throw notFound();
	}

	return (
		<>
			<CategoryList categories={categoriesResponse.categories.data} />
			{/* <ProductsPgination count={productsCount} /> */}
		</>
	);
}
