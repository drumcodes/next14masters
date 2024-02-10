type ProductCoverImageProps = {
	src: string;
	alt: string;
	height: number;
	width: number;
};

export const ProductCoverImage = ({
	src,
	alt,
	height,
	width,
}: ProductCoverImageProps) => {
	return (
		<div className="aspect-auto overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				width={width}
				height={height}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
