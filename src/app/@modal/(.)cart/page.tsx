import { getOrCreateCart } from "@/ui/actions";
import { Overlay } from "@/ui/components/atoms/Overlay";

export default async function ModalCart() {
	const cart = await getOrCreateCart();

	return (
		<div className="modal-overlay fixed absolute left-0 top-0 h-full w-full ">
			<Overlay />
			<div className="absolute right-0 top-0 z-40 h-full w-full  max-w-sm bg-white">
				<ul>
					{cart?.items.map((item) => (
						<li key={item.product.id}>{item.product?.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
