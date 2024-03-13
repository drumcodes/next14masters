import { type ProductListItemFragmentFragment } from "@/gql/graphql";

export const formatPrice = (amount: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
};

export function isNotEmpty<T>(array: T[]): boolean {
	return Array.isArray(array) && array.length > 0;
}

export function getAverageProdctRating(
	reviews: ProductListItemFragmentFragment["reviews"],
) {
	if (reviews.length === 0) return 0;
	const totalRating = reviews.reduce(
		(sum, review) => sum + review.rating,
		0,
	);
	const averageRating = totalRating / reviews.length;
	return Math.round(averageRating * 100) / 100;
}
