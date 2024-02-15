import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/views/products/ProductList";



export default async function ProductsPage() {
	const products = await getProductsList();
	return <ProductList products={products} />;
}
