import { type ProductItem } from "../types";
import { formatPrice } from "../utils";

type ProductDescriptionProps = {
	product: ProductItem;
};

export const ProductDescription = ({
	product: { name, category, price, description },
}: ProductDescriptionProps) => {
	return (
		<>
			<div className="mb-5 mt-2 flex flex-row justify-between">
				<div>
					<h1 className="text-grey-700 text-sm font-semibold text-gray-700">
						{name}
					</h1>
					<p className="text-sm text-gray-500"> {category}</p>
				</div>
				<div>
					<p className="mb-5 text-sm font-medium text-gray-900">
						{formatPrice(price / 100)}
					</p>
				</div>
			</div>
			<p className="text-gray-500">{description}</p>
		</>
	);
};
