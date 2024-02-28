import { CollectionListItem } from "./CollectionListItem";
import { type CollectionListItemFragmentFragment } from "@/gql/graphql";

export const CollectionList = ({
	collections,
}: {
	collections: CollectionListItemFragmentFragment[];
}) => {
	return (
		<ul
			data-testid="products-list"
			className="mb-10 grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{collections.map((collection) => {
				return (
					<CollectionListItem
						key={collection.id}
						collection={collection}
					/>
				);
			})}
		</ul>
	);
};
