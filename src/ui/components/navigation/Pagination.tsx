"use client";
import { ActiveLink } from "./ActiveLink";

export const defaultLimit = 1;

export function Pagination({
	href,
	count,
	limit,
	searchParams,
}: {
	href: string;
	count: number;
	limit?: number;
	searchParams?: { sort?: string };
}) {
	const safeLimit = limit ?? defaultLimit;
	const numberOfPages = Math.ceil(count / safeLimit);
	const params = searchParams?.sort
		? `?sort=${searchParams.sort}`
		: "";
	return (
		<div
			aria-label="pagination"
			className="mx-auto flex justify-center"
		>
			{Array.from({ length: numberOfPages }, (_, index) => (
				<ActiveLink
					key={index}
					href={`/${href}/${index + 1}}${params}`}
				>
					<p className="mx-1 py-2">{index + 1}</p>
				</ActiveLink>
			))}
		</div>
	);
}
