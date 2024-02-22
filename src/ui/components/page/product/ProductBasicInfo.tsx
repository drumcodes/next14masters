import { type ProductItem } from "../../../types";
import { formatPrice } from "../../../utils";

type ProductBasicInfoProps = {
	product: ProductItem;
};

export const ProductBasicInfo = ({
	product: { name, price },
}: ProductBasicInfoProps) => {
	return (
		<>
			<div className="mb-5 mt-2 flex flex-row justify-between">
				<div>
					<h1 className="text-sm font-semibold text-gray-700">
						{name}
					</h1>
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