import NextImage from "next/image";

type ProductCoverImageProps = {
	url: string;
	alt: string;
};

export const ProductListCover = ({
	url,
	alt,
}: ProductCoverImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-xl border bg-slate-50 hover:bg-slate-100">
			<NextImage
				alt={alt}
				src={url}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
				width={320}
				height={320}
			/>
		</div>
	);
};
