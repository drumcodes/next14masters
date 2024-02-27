import { CategoryListItem } from "./CategoryListItem";
import { type CategoryListItemFragmentFragment } from "@/gql/graphql";

export const CategoryList = ({
	categories,
}: {
	categories: CategoryListItemFragmentFragment[];
}) => {
	return (
		<ul
			data-testid="products-list"
			className="mb-10 grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{categories.map((category) => {
				return (
					<CategoryListItem key={category.id} category={category} />
				);
			})}
		</ul>
	);
};
