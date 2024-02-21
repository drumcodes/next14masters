import { type ProductItem } from "../../../types";
import { formatPrice } from "../../../utils";

type ProductDescriptionProps = {
	product: ProductItem;
};

export const ProductDescription = ({
	product: { name, price, description },
}: ProductDescriptionProps) => {
	return (
		<>
			<div className="mb-5 ml-20 mt-2 flex flex-col">
				<div className="mb-10">
					<h1 className="text-2xl font-semibold text-gray-700">
						{name}
					</h1>
					{/* <p className="text-sm text-gray-800"> {category}</p> */}
				</div>
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
