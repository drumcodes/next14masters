/** @type {import('next').NextConfig} */

const nextConfig = {
	pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
