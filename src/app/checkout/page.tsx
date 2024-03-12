import { redirect } from "next/navigation";
import Stripe from "stripe";
import { StripeForm } from "./stripeForm";
import { getOrCreateCart } from "@/ui/actions";
import { formatPrice } from "@/ui/utils";

export default async function PaymentPage() {
	const cart = await getOrCreateCart();
	if (!cart) {
		redirect("/");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const totalAmount = cart.items.reduce(
		(acc, item) => acc + (item.product?.price ?? 0),
		0,
	);
	const paymentIntent = await stripe.paymentIntents.create({
		amount: totalAmount,
		payment_method_types: ["card"],
		currency: "usd",
		metadata: {
			orderId: cart.id,
		},
	});

	if (!paymentIntent.client_secret) {
		throw new Error("Missing client_secret");
	}

	return (
		<div>
			<h1>{`Total amount: ${formatPrice(totalAmount / 100)}`}</h1>
			<StripeForm clientSecret={paymentIntent.client_secret} />
		</div>
	);
}
