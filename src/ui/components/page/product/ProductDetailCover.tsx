type ProductDetailCoverProps = {
	src: string;
	alt: string;
};

export const ProductDetailCover = ({
	src,
	alt,
}: ProductDetailCoverProps) => {
	return (
		<div className="aspect- h-100 overflow-hidden border">
			<img
				alt={alt}
				src={src}
				className="h-ful h-fulll h-full w-full object-cover object-center"
			/>
		</div>
	);
};
