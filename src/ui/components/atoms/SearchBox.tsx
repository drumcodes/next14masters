"use client";

import { type Route } from "next";
import { useRouter } from "next/navigation";

type SearchBoxRedirectProps = {
	redirectHref: string;
	searchDelay: number;
	minQueryLength?: number;
};

export const SearchBox = ({
	redirectHref,
	searchDelay,
	minQueryLength,
}: SearchBoxRedirectProps) => {
	const router = useRouter();

	let timer: ReturnType<typeof setTimeout>;
	const minLength = minQueryLength ?? 2;
	const sleep = (ms: number): Promise<void> => {
		return new Promise((resolve) => {
			timer = setTimeout(resolve, ms);
		});
	};

	const shouldSearch = (query: string): boolean => {
		return query.length > minLength;
	};
	const handleSearch = async (query: string, searchDelay: number) => {
		clearTimeout(timer);
		await sleep(searchDelay);
		router.push(`${redirectHref}?query=${query}` as Route);
	};

	return (
		<div>
			<div className="ml-2 p-5">
				<input
					role="searchbox"
					placeholder="Search products"
					minLength={minLength}
					type="text"
					className="flex border pl-2 pr-2 placeholder:text-center placeholder:italic  invalid:bg-red-100"
					min={2}
					onChange={async (event) => {
						if (shouldSearch(event.target.value)) {
							await handleSearch(event.target.value, searchDelay);
						}
					}}
				/>
			</div>
		</div>
	);
};
