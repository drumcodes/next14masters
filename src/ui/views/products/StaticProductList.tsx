import { StaticProductListItem } from "@/ui/components/StaticProducListItem";
import { type ProductItem } from "@/ui/types";

export const StaticProductList = ({
	products,
}: {
	products: ProductItem[];
}) => {
	return (
		<ul
			data-testid="static-products-list"
			className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{products.map((product, index) => {
				return (
					<StaticProductListItem
						key={product.id}
						product={product}
						idx={index}
					/>
				);
			})}
		</ul>
	);
};
