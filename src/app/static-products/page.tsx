import { staticProducts } from "../products/staticProducts";
import { StaticProductList } from "@/ui/views/products/StaticProductList";

export default async function StaticProductsPage() {
	return <StaticProductList products={staticProducts} />;
}
