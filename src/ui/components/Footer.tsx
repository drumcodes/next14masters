import { ActiveLink } from "./ActiveLink";

export const Footer = () => {
	return (
		<>
			<ul className="mt-2 flex justify-center space-x-4">
				<li>
					<ActiveLink href={"/regulations"}>Regulations</ActiveLink>
				</li>
				<li>
					<ActiveLink href={"/privacy-policy"}>
						Privacy Policy
					</ActiveLink>
				</li>
			</ul>
			<p className="mb-5 text-center text-gray-500">
				© DrumCodes - NEXT.js Masters 2024
			</p>
		</>
	);
};
