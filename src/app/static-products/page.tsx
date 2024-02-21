import { staticProducts } from "./staticProducts";
import { StaticProductList } from "@/ui/components/page/products/StaticProductList";

export default async function StaticProductsPage() {
	return <StaticProductList products={staticProducts} />;
}
