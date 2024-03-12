import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ChangeQuantity } from "@/ui/components/page/product/IncrementProductQuantity";
import { formatPrice } from "@/ui/utils";
import { executeGraphql } from "@/api/utils";
import { CartGetByIdDocument } from "@/gql/graphql";
import { RemoveButton } from "@/ui/components/page/cart/RemoveProduct";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const { cart } = await executeGraphql({
		query: CartGetByIdDocument,
		variables: {
			id: cartId,
		},
		next: {
			tags: ["cart"],
		},
		cache: "no-store",
	});

	if (!cart) {
		redirect("/");
	}

	return (
		<div className="flex flex-col">
			<div className="-m-1.5 overflow-x-auto">
				<div className="min-w-md inline-block p-1.5 align-middle">
					<div className="overflow-hidden">
						<table className="min-w-full divide-y divide-gray-100 text-left">
							<thead>
								<tr>
									<th className="text-md min-w-60 pl-2">Product</th>
									<th className="text-md min-w-48 pl-2">Quantity</th>
									<th className="text-md min-w-24 pl-2">Price</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 ">
								{cart.items.map((item) => {
									if (!item.product) {
										return null;
									}
									return (
										<tr
											className="hover:bg-gray-100"
											key={item.product.id}
										>
											<td className="border-r border-gray-200">
												<div className="mr-5 p-2 pr-10">
													{item.product.name}
												</div>
											</td>
											<td className="border-r border-gray-200">
												<div className="p-2 pr-10">
													<ChangeQuantity
														cartId={cart.id}
														productId={item.product.id}
														quantity={item.quantity}
													/>
												</div>
											</td>
											<td>
												<div className="p-2 pr-2">
													{formatPrice(item.product.price / 100)}
												</div>
											</td>
											<td>
												<RemoveButton
													id={cart.id}
													productId={item.product.id}
												/>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<form
				action={async () => {
					"use server";
					redirect("/checkout");
				}}
				className="ml-auto"
			>
				<button
					type="submit"
					className="rounded-sm border bg-slate-100 px-8 py-2 shadow-sm transition-colors hover:bg-slate-200"
					disabled={cart.items.length == 0}
				>
					Pay
				</button>
			</form>
		</div>
	);
}
