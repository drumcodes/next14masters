/** @type {import('next').NextConfig} */

const nextConfig = {
	pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	images: {
		domains: ["static-ourstore.hyperfunctor.com"],
	},
	redirects: async () => {
		return [
			{
				source: "/products/t-shirts",
				destination: "/products/t-shirts/1",
				permanent: false,
			},
			{
				source: "/products/accessories",
				destination: "/products/accessories/1",
				permanent: false,
			},
			{
				source: "/products/hoodies",
				destination: "/products/hoodies/1",
				permanent: false,
			},
		];
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
