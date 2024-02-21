import Link from "next/link";
import { type ProductItem } from "../../../types";
import { ProductListCover } from "../product/ProductListCover";
import { ProductDescription } from "../product/ProductDescription";

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
					<ProductListCover {...product.coverImage} />
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
