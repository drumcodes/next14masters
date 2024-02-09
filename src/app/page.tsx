export default function Home() {
	return (
		<main className="flex h-screen flex-col items-center justify-center">
			<div className="w-full max-w-3xl items-center justify-between p-24 font-mono text-sm lg:flex">
				<p className="after:content-['\01F30E'] ">hello world </p>
				<a>By drumcodes</a>
			</div>
			<div className="max-h-5xl inline-block bg-gradient-to-tl from-cyan-200 to-blue-300 bg-clip-text text-center align-middle text-5xl font-bold text-transparent">
				NEXT.js
				<hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
				masters
			</div>
		</main>
	);
}
