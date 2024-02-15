import Link from "next/link";
import { type ProductItem } from "../types";
import { ProductCoverImage } from "./ProductCoverImage";
import { ProductDescription } from "./ProductListItemDescription";

type ProductListItemProps = {
	product: ProductItem;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage {...product.coverImage} />
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
