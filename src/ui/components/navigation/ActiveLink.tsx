"use client";

import Link, { type LinkProps } from "next/link";
import clsx, { type ClassValue } from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: string;
	children: ReactNode;
	className?: ClassValue;
	activeClassName?: ClassValue;
	exact?: boolean;
} & Omit<LinkProps<T>, "href">;

export const ActiveLink = <T extends string>({
	className,
	activeClassName,
	href,
	children,
	exact,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();

	const isActive = exact
		? pathname === href
		: pathname.startsWith(href);
	return (
		<Link
			className={clsx(
				className ?? "text-gray-800",
				(isActive && activeClassName) ?? "underline",
			)}
			href={href as Route}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
