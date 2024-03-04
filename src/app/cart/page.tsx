import { getOrCreateCart } from "@/ui/actions";
import { ChangeQuantity } from "@/ui/components/page/product/IncrementProductQuantity";
import { formatPrice } from "@/ui/utils";

export default async function CartPage() {
	const cart = await getOrCreateCart();

	return (
		<div>
			<h1>Order #{cart.id} summary</h1>
			<table className="table-fixed">
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.items.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr key={item.product.id}>
								<td>{item.product.name}</td>
								<td>
									<ChangeQuantity
										itemId={cart.id}
										productId={item.product.id}
										quantity={item.quantity}
									/>
								</td>
								<td>{formatPrice(item.product.price / 100)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
