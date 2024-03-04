import { ProductList } from "./ProductList";
import { getProductsList } from "@/api/products";

export const SuggestedProductsList = async () => {
	const products = await getProductsList();

	const sliceSize = 4;
	const startIndex = Math.floor(
		Math.random() * (products.data.length - sliceSize + 1),
	);
	const endIndex = startIndex + sliceSize;

	return (
		<>
			<h1 className="text-md mb-2 font-bold">
				{`You may also like:`}
			</h1>
			<div data-testid="related-products">
				<ProductList
					products={products.data.slice(startIndex, endIndex)}
				/>
			</div>
		</>
	);
};
