"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SortProducts({ sort }: { sort?: string }) {
	const router = useRouter();

	type SortOption = {
		value: string;
		label: string;
		icon: string;
		dataTestId?: string;
	};

	const sortOptions: SortOption[] = [
		{
			value: "priceDesc",
			label: "Price",
			icon: "\u25BC",
			dataTestId: "sort-by-price",
		},
		{
			value: "priceAsc",
			label: "Price",
			icon: "\u25B2",
			dataTestId: "sort-by-price",
		},
		{
			value: "ratingAsc",
			label: "Rating",
			icon: "\u25B2",
			dataTestId: "sort-by-rating",
		},
		{
			value: "ratingDesc",
			label: "Rating",
			icon: "\u25BC",
			dataTestId: "sort-by-rating",
		},
	];

	const [selectedOption, setSelectedOption] = useState<string>(
		sort ?? "",
	);

	const handleSelectChange = async (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		const selectedValue = event.target.value;
		setSelectedOption(selectedValue);

		router.push(`?sort=${selectedValue}`);
		router.refresh();
	};

	return (
		<div className="mb-10 ">
			<label className="mr-2 font-bold" htmlFor="sortSelect">
				Sort by:
			</label>
			<select
				className="none bordexr-gray-300 appearance-none border p-1 text-center"
				id="sortSelect"
				value={selectedOption}
				onChange={handleSelectChange}
			>
				<option>---</option>
				{sortOptions.map((option) => (
					<option
						data-testid={option.dataTestId}
						key={option.value}
						value={option.value}
					>
						{option.label} {`${option.icon}`}
					</option>
				))}
			</select>
		</div>
	);
}
