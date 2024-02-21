import Link from "next/link";
import { type ProductItem } from "../../../types";
import { ProductListCover } from "./ProductListCover";
import { ProductBasicInfo } from "./ProductBasicInfo";

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
					<ProductListCover {...product.coverImage} />
					<ProductBasicInfo product={product} />
				</article>
			</Link>
		</li>
	);
};
