export default function SingleProduct({
	params,
	searchParams,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const sortBy = searchParams?.sortBy?.toString();

	return (
		<div>
			<h1>Single Product: {params.productId}</h1>
			<p>Sort by: {sortBy}</p>
		</div>
	);
}
