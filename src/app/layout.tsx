import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveLink } from "@/ui/components/ActiveLink";

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
				<nav>
					<ul className="mt-2 flex justify-center space-x-4">
						<li>
							<ActiveLink href={"/"}>Homepage </ActiveLink>
						</li>
						<li>
							<ActiveLink href={"/products"}>Products </ActiveLink>
						</li>
					</ul>
				</nav>
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer>
					<nav>
						<ul className="mt-2 flex justify-center space-x-4">
							<li>
								<ActiveLink href={"/regulations"}>
									Regulations
								</ActiveLink>
							</li>
							<li>
								<ActiveLink href={"/privacy-policy"}>
									Privacy Policy
								</ActiveLink>
							</li>
						</ul>
					</nav>
					<p className="text-center text-gray-500">
						© DrumCodes - NEXT.js Masters 2024
					</p>
				</footer>
			</body>
		</html>
	);
}
