import Link from "next/link";
import { type ProductItem } from "../types";
import { ProductCoverImage } from "./ProductCoverImage";
import { ProductDescription } from "./ProductListItemDescription";

type ProductListItemProps = {
	product: ProductItem;
	idx: number;
};

export const StaticProductListItem = ({
	product,
	idx,
}: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/static-product/${idx}`}>
				<article>
					<ProductCoverImage {...product.coverImage} />
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
