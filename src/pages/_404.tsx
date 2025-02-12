import { Layout } from "../layouts/Layout";

export function NotFound() {
	return (
		<Layout title="404">
			<h1 class="text-2xl text-center">404: Not Found</h1>
			<p class="mb-4 text-center">It was never here...</p>
		</Layout>
	);
}
