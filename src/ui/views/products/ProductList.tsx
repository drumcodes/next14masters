import { ProductListItem } from "@/ui/components/ProducListItem";
import { type ProductItem } from "@/ui/types";

export const ProductList = ({
	products,
}: {
	products: ProductItem[];
}) => {
	return (
		<ul className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
