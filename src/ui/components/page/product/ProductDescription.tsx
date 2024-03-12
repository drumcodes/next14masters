import { formatPrice } from "../../../utils";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

type ProductDescriptionProps = {
	product: ProductListItemFragmentFragment;
};

export const ProductDescription = ({
	product: { name, price, description },
}: ProductDescriptionProps) => {
	return (
		<>
			<h1 className="text-2xl font-semibold text-gray-700">{name}</h1>
			<div className="mb-5 mt-2 flex flex-col">
				<p className="max-w-sm text-gray-800">{description}</p>
				<p className="mb-5 mt-10 text-2xl text-gray-900">
					{formatPrice(price / 100)}
				</p>
			</div>
		</>
	);
};
