export const formatPrice = (amount: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
};

export function isNotEmpty<T>(array: T[]): boolean {
	return Array.isArray(array) && array.length > 0;
}
