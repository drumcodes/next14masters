"use client";

import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();

	return (
		<button
			data-testid="add-to-cart-button"
			type="submit"
			disabled={formStatus.pending}
			className="mb-5 rounded-md border bg-slate-200 px-8 py-3  hover:bg-cyan-300 disabled:cursor-wait"
		>
			Add to cart
		</button>
	);
};
