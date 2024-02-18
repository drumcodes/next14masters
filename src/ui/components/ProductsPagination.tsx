"use client";
import { ActiveLink } from "./ActiveLink";

export function ProductsPagination({
	count,
	limit,
}: {
	count: number;
	limit?: number;
}) {
	return (
		<div
			aria-label="pagination"
			className="mx-auto flex justify-center"
		>
			{Array.from({ length: count / (limit ?? 20) }, (_, index) => (
				<ActiveLink key={index} href={`/products/${index + 1}`}>
					<p className="mx-1 py-2">{index + 1}</p>
				</ActiveLink>
			))}
		</div>
	);
}
