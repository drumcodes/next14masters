import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/ui/components/NavBar";
import { Footer } from "@/ui/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "DrumCodes Shop",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return §(
		<html lang="pl">
			<body className={inter.className}>
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					<NavBar />
					{children}
				</section>
				<footer>	
					<Footer />
				</footer>
			</body>
		</html>
	);
}
