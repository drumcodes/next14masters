import { ProductRating } from "./ProductRating";

export const ProductReview = () => {
	return (
		<div className="mx-auto max-w-md">
			<h1 className="w-full text-center text-xl font-bold">
				Review product:
			</h1>
			<form
				data-testid="add-review-form"
				className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
			>
				<ProductRating />
				<div className="mb-4">
					<label
						className="mb-2 block text-sm font-bold text-gray-700"
						htmlFor="headline"
					>
						Headline
					</label>
					<input
						className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
						id="headline"
						name="headline"
						type="text"
						placeholder="Enter headline"
					/>
				</div>
				<div className="mb-4">
					<label
						className="mb-2 block text-sm font-bold text-gray-700"
						htmlFor="content"
					>
						Content
					</label>
					<input
						className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
						id="content"
						name="content"
						placeholder="Enter content"
						type="text"
					></input>
				</div>
				<div className="mb-4">
					<label
						className="mb-2 block text-sm font-bold text-gray-700"
						htmlFor="name"
					>
						Name
					</label>
					<input
						className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
						id="name"
						name="name"
						type="text"
						placeholder="Enter name"
					/>
				</div>
				<div className="mb-4">
					<label
						className="mb-2 block text-sm font-bold text-gray-700"
						htmlFor="email"
					>
						Email
					</label>
					<input
						className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
						id="email"
						name="email"
						type="email"
						placeholder="Enter email"
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="fmb-5 w-full justify-center rounded-md border bg-slate-200 px-8 py-3  hover:bg-cyan-300 disabled:cursor-wait"
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};
