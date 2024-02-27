import NextImage from "next/image";

type ProductDetailCoverProps = {
	url: string;
	alt: string;
};

export const ProductDetailCover = ({
	url,
	alt,
}: ProductDetailCoverProps) => {
	return (
		<div className="aspect- h-100 overflow-hidden border">
			<NextImage
				alt={alt}
				src={url}
				className="h-ful h-fulll h-full w-full object-cover object-center"
				width={400}
				height={1000}
			/>
		</div>
	);
};
