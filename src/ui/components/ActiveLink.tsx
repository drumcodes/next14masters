"use client";

import { type UrlObject } from "url";
import Link, { type LinkProps } from "next/link";
import clsx, { type ClassValue } from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";
import { isLinkActive } from "../utils";

type ActiveLinkProps<Href> = {
	href: string;
	children: ReactNode;
	className?: ClassValue;
	activeClassName?: ClassValue;
} & LinkProps<Href>;

export const ActiveLink = ({
	className,
	activeClassName,
	href,
	children,
}: ActiveLinkProps<UrlObject>) => {
	const pathname = usePathname();

	const isActive = isLinkActive(pathname, href);
	const ariaCurrent = isActive ? { "aria-current": isActive } : {};
	return (
		<Link
			className={clsx(
				className ?? "text-blue-400 hover:text-blue-600",
				(isActive && activeClassName) ?? "underline",
			)}
			href={href as Route}
			{...ariaCurrent}
		>
			{children}
		</Link>
	);
};
