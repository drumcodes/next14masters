import { type ProductItem } from "../types";
import { formatPrice } from "../utils";

type ProductDescriptionProps = {
	product: ProductItem;
};

export const ProductDescription = ({
	product: { name, category, price },
}: ProductDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-grey-700 text-sm font-semibold text-gray-700">
					{name}
				</h3>
				<p className="text-sm text-gray-500"> {category}</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				{formatPrice(price / 100)}
			</p>
		</div>
	);
};
