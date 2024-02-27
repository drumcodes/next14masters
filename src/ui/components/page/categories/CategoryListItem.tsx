import Link from "next/link";
import { ProductListCover } from "../product/ProductListCover";
import { type CategoryListItemFragmentFragment } from "@/gql/graphql";

type CategoryListItemProps = {
	category: CategoryListItemFragmentFragment;
};

export const CategoryListItem = ({
	category,
}: CategoryListItemProps) => {
	return (
		<li>
			{category?.name}
			<Link href={`/categories/${category?.slug}/1`}>
				<article>
					{category.products[0]?.images[0] && (
						<ProductListCover {...category.products[0]?.images[0]} />
					)}
				</article>
			</Link>
		</li>
	);
};
