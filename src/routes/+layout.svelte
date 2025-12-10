<script lang="ts">
	import "../styles/app.css";
	import "../styles/article-styles.css";
	import { resolve } from "$app/paths";

	let { children } = $props();
</script>

<div class="min-h-screen">
	<nav class="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
		<div class="container mx-auto px-6 py-4">
			<div class="flex items-center justify-between">
				<a
					href={resolve("/")}
					class="text-2xl font-display font-bold gradient-text"
				>
					VLad Fedorenko
				</a>
				<div class="flex gap-8">
					<a
						href={resolve("/")}
						class="text-slate-300 hover:text-white transition-colors"
						>About</a
					>
					<a
						href="{resolve('/')}#projects"
						class="text-slate-300 hover:text-white transition-colors"
						>Projects</a
					>
					<a
						href="{resolve('/')}#contact"
						class="text-slate-300 hover:text-white transition-colors"
						>Contact</a
					>
				</div>
			</div>
		</div>
	</nav>

	<main class="pt-20">
		{@render children()}
	</main>

	<footer class="glass border-t border-white/10 mt-20">
		<div class="container mx-auto px-6 py-8">
			<div class="text-center text-slate-400">
				<p>
					&copy; 2025 UI/UX Designer Portfolio. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
</div>
