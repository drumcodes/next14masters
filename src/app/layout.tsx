import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/ui/components/navigation/NavBar";
import { Footer } from "@/ui/components/navigation/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "DrumCodes Shop",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<header className="sticky top-0 z-10 max-h-fit border-b border-gray-600 border-opacity-10 bg-opacity-90 backdrop-blur backdrop-opacity-95">
					<NavBar />
				</header>
				<section className="mx-auto h-full p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-screen-2xl">
					{children}
				</section>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
