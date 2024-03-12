"use client";
import { useOptimistic } from "react";
import { changeItemQuantity } from "@/ui/actions";

export function ChangeQuantity({
	cartId,
	productId,
	quantity,
}: {
	cartId: string;
	productId: string;
	quantity: number;
}) {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form className="flex">
			<button
				data-testid="increment"
				className="h-6 w-6 border bg-slate-100 text-center hover:bg-cyan-300"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity({
						id: cartId,
						productId: productId,
						quantity: optimisticQuantity + 1,
					});
				}}
			>
				+
			</button>
			<button
				data-testid="decrement"
				className="h-6 w-6 border bg-slate-100 text-center hover:bg-cyan-300"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity({
						id: cartId,
						productId: productId,
						quantity: optimisticQuantity - 1,
					});
				}}
			>
				-
			</button>
			<span data-testid="quantity" className="w-8 text-center">
				{optimisticQuantity}
			</span>
		</form>
	);
}
