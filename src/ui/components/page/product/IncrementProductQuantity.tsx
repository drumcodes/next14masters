"use client";
import { useOptimistic } from "react";
import { changeItemQuantity } from "@/ui/actions";

export function ChangeQuantity({
	itemId,
	productId,
	quantity,
}: {
	itemId: string;
	productId: string;
	quantity: number;
}) {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form className="flex">
			<span className="w-8 text-center">{optimisticQuantity}</span>
			<button
				className="h-6 w-6 border bg-slate-100 text-center hover:bg-cyan-300"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity({
						id: itemId,
						productId: productId,
						quantity: optimisticQuantity + 1,
					});
				}}
			>
				+
			</button>
		</form>
	);
}
