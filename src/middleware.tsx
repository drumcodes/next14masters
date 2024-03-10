import { NextResponse } from "next/server";
import { isAuthenticated } from "./lib/auth";

export const config = {
	matcher: "/cart",
};

export function middleware() {
	if (!isAuthenticated()) {
		return new NextResponse(
			JSON.stringify({
				success: false,
				message: "authentication failed",
			}),
			{
				status: 401,
				headers: { "content-type": "application/json" },
			},
		);
	}
}
