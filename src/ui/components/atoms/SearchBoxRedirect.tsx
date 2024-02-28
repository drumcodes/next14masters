"use client";

import { navigate } from "@/app/actions";

type SearchBoxRedirectProps = {
	redirectHref: string;
	searchDelay: number;
	minQueryLength?: number;
};

export const SearchBoxRedirect = ({
	redirectHref,
	searchDelay,
	minQueryLength,
}: SearchBoxRedirectProps) => {
	let timer: ReturnType<typeof setTimeout>;

	const sleep = (ms: number): Promise<void> => {
		return new Promise((resolve) => {
			timer = setTimeout(resolve, ms);
		});
	};

	const shouldSearch = (query: string): boolean => {
		const min = minQueryLength ?? 1;
		return query ? query.length > min : false;
	};
	const handleSearch = async (query: string, searchDelay: number) => {
		clearTimeout(timer);
		await sleep(searchDelay);
		await navigate(`${redirectHref}?query=${query}`);
	};

	return (
		<div>
			<div className="ml-2 p-5">
				<input
					placeholder="Search products"
					type="text"
					className="flex border pl-2 pr-2 placeholder:text-center placeholder:italic"
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
