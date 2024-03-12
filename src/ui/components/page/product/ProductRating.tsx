"use client";

import { Star } from "lucide-react";
import { useState } from "react";

export const ProductRating = () => {
	const [rating, setRating] = useState(1);

	const updateRating = (value: number) => {
		setRating(value);
	};
	return (
		<div className="mb-4">
			<label
				className="mb-2 block text-sm font-bold text-gray-700"
				htmlFor="rating"
				id="rating"
			>
				Rating
			</label>
			<div className="flex flex-row-reverse justify-center">
				{[5, 4, 3, 2, 1].map((star) => (
					<i
						key={star}
						onClick={() => updateRating(star)}
						className={`peer mx-2  cursor-pointer  hover:text-yellow-500 peer-hover:text-yellow-500 ${rating >= star ? "text-yellow-500" : "text-gray-500"}`}
					>
						{<Star />}
					</i>
				))}
			</div>
			<input
				className="absolute -left-full -top-full"
				id="rating"
				name="rating"
				value={rating}
				readOnly
			/>
		</div>
	);
};
