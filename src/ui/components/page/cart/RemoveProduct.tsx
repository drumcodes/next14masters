"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";
import { removeItem } from "@/ui/actions";

export function RemoveButton({
	id,
	productId,
}: {
	id: string;
	productId: string;
}) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	return (
		<button
			disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					await removeItem(id, productId);
					router.refresh();
				})
			}
			className="ml-2 border  p-1 text-sm font-medium text-black hover:bg-cyan-300 disabled:cursor-wait disabled:text-slate-400"
		>
			<Trash size={20} />
		</button>
	);
}
