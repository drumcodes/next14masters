import Link from "next/link";
import { ProductListCover } from "../product/ProductListCover";
import { type CollectionListItemFragmentFragment } from "@/gql/graphql";

type CollectionListItemProps = {
	collection: CollectionListItemFragmentFragment;
};

export const CollectionListItem = ({
	collection,
}: CollectionListItemProps) => {
	return (
		<li>
			{collection?.name}
			<Link href={`/collections/${collection?.slug}`}>
				<article>
					{collection.products[0]?.images[0] && (
						<ProductListCover
							{...collection.products[0]?.images[0]}
						/>
					)}
				</article>
			</Link>
		</li>
	);
};
