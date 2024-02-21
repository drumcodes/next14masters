"use client";
import { useState } from "react";

export const Counter = () => {
	const [counter, setCounter] = useState<number>(1);

	return (
		<div>
			<button
				className="border border-slate-200 px-4"
				onClick={() =>
					setCounter((counter) => (counter != 1 ? counter - 1 : 1))
				}
			>
				-
			</button>
			<input
				className="border border-slate-200"
				readOnly
				value={counter}
			></input>
			<button
				className="border border-slate-200 px-4"
				onClick={() => setCounter((counter) => counter + 1)}
			>
				+
			</button>
		</div>
	);
};
