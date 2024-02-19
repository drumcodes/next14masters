export const formatPrice = (amount: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
};

export function isLinkActive(
	pathName: string,
	href: string,
): boolean {
	return pathName === href;
}
