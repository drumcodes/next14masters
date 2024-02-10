import { type ProductItem } from "@/ui/types";
import { ProductList } from "@/ui/views/products/ProductList";

const products: ProductItem[] = [
	{
		id: "224ac120-2405-4334-b252-41df9d5fe008",
		category: "crystal glass",
		name: "Whiskey",
		price: 2137,
		coverImage: {
			height: 500,
			width: 320,
			src: "/whiskey1.jpeg",
			alt: "Whiskey Glass",
		},
	},
	{
		id: "224ac120-2405-4334-b252-41df9d5fe008",
		category: "crystal glass",
		name: "Wine",
		price: 1299,
		coverImage: {
			height: 100,
			width: 320,
			src: "/wino1.jpeg",
			alt: "Wine Glass",
		},
	},
	{
		id: "224ac120-2405-4334-b252-41df9d5fe008",
		category: "crystal glass",
		name: "Cognac",
		price: 999,
		coverImage: {
			height: 100,
			width: 320,
			src: "/koniak1.jpeg",
			alt: "Cognac Glass",
		},
	},
	{
		id: "224ac120-2405-4334-b252-41df9d5fe008",
		category: "crystal glass",
		name: "Champagne",
		price: 1199,
		coverImage: {
			height: 100,
			width: 320,
			src: "/szampan1.jpeg",
			alt: "Champagne Glass",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList data-testid="products-list" products={products} />
		</section>
	);
}
