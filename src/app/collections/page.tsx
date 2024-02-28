import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/utils";
import { CollectionsGetListDocument } from "@/gql/graphql";
import { CollectionList } from "@/ui/components/page/collections/CollectionList";

export default async function CollectionsPage() {
	const collectionsResponse = await executeGraphql(
		CollectionsGetListDocument,
		{},
	);

	if (!collectionsResponse.collections) {
		throw notFound();
	}

	return (
		<>
			<CollectionList
				collections={collectionsResponse.collections.data}
			/>
		</>
	);
}
