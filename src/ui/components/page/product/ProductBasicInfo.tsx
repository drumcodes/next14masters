import { formatPrice } from "../../../utils";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

type ProductBasicInfoProps = {
	product: ProductListItemFragmentFragment;
};

export const ProductBasicInfo = ({
	product: { name, price },
}: ProductBasicInfoProps) => {
	return (
		<>
			<div className="mb-5 mt-2 flex flex-row justify-between">
				<div>
					<h2 className="text-sm font-semibold text-gray-700">
						{name}
					</h2>
				</div>
				<div>
					<p className="mb-5 text-sm font-medium text-gray-900">
						{formatPrice(price / 100)}
					</p>
				</div>
			</div>
		</>
	);
};
