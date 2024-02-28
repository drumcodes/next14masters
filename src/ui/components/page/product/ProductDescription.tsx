import { formatPrice } from "../../../utils";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

type ProductDescriptionProps = {
	product: ProductListItemFragmentFragment;
};

export const ProductDescription = ({
	product: { price, description },
}: ProductDescriptionProps) => {
	return (
		<>
			<div className="mb-5 ml-20 mt-2 flex flex-col">
				<div className="mb-10"></div>
				<div className="flex flex-row">
					<p className="mb-5 text-2xl text-gray-900">
						{formatPrice(price / 100)}
					</p>
				</div>
				<p className="mb-5 max-w-md text-black">Product details:</p>
				<p className="max-w-md text-gray-800">{description}</p>
			</div>
		</>
	);
};
