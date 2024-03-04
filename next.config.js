/** @type {import('next').NextConfig} */

const nextConfig = {
	pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static-ourstore.hyperfunctor.com",
			},
		],
	},
	redirects: async () => {
		return [
			{
				source: "/categories/t-shirts",
				destination: "/categories/t-shirts/1",
				permanent: false,
			},
			{
				source: "/categories/accessories",
				destination: "/categories/accessories/1",
				permanent: false,
			},
			{
				source: "/categories/hoodies",
				destination: "/categories/hoodies/1",
				permanent: false,
			},
			{
				source: "/products",
				destination: "/products/1",
				permanent: false,
			},
		];
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
