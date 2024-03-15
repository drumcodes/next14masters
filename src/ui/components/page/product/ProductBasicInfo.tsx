import { formatPrice, getAverageProdctRating } from "../../../utils";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

type ProductBasicInfoProps = {
	product: ProductListItemFragmentFragment;
};

export const ProductBasicInfo = ({
	product: { name, price, reviews },
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
					<p
						data-testid="product-rating"
						className="mb-5 text-sm font-medium text-gray-900"
					>
						{`${getAverageProdctRating(reviews)}`}
					</p>
				</div>
				<div>
					<p
						data-testid="product-price"
						className="mb-5 text-sm font-medium text-gray-900"
					>
						{formatPrice(price / 100)}
					</p>
				</div>
			</div>
		</>
	);
};
