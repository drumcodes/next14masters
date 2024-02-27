import Link from "next/link";
import { ProductListCover } from "./ProductListCover";
import { ProductBasicInfo } from "./ProductBasicInfo";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragmentFragment;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product?.id}`}>
				<article>
					{product.images[0] && (
						<ProductListCover {...product.images[0]} />
					)}
					<ProductBasicInfo product={product} />
				</article>
			</Link>
		</li>
	);
};
