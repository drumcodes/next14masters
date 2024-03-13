"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SortProducts({ sort }: { sort?: string }) {
	const router = useRouter();

	type SortOption = {
		value: string;
		label: string;
		icon: string;
	};

	const sortOptions: SortOption[] = [
		{ value: "priceAsc", label: "Price", icon: "\u25B2" },
		{ value: "priceDesc", label: "Price", icon: "\u25BC" },
		{ value: "ratingAsc", label: "Rating", icon: "\u25B2" },
		{ value: "ratingDesc", label: "Rating", icon: "\u25BC" },
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
				<option value="">---</option>
				{sortOptions.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label} {`${option.icon}`}
					</option>
				))}
			</select>
		</div>
	);
}
