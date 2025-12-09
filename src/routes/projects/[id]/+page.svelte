<script lang="ts">
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();

    // Reactive statement to update when data changes
    let project = $derived(data.project);
    let Content = $derived(data.content);
    let nextProject = $derived(data.nextProject);
    let previousProject = $derived(data.previousProject);
    import { base } from "$app/paths";
</script>

<svelte:head>
    <title>{project.title} - Portfolio</title>
    <meta name="description" content={project.description} />
</svelte:head>

<!-- Hero Section -->
<section class="container mx-auto px-6 py-20">
    <div class="max-w-4xl mx-auto">
        <a
            href="{base}/"
            class="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-8 group"
        >
            <svg
                class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
            </svg>
            Back to Home
        </a>

        <div class="animate-fade-in">
            <h1
                class="text-5xl md:text-6xl font-display font-black mb-6 gradient-text"
            >
                {project.title}
            </h1>
            <p class="text-xl text-slate-300 mb-6">{project.description}</p>
            <div class="flex flex-wrap gap-2 mb-8">
                {#each project.tags as tag}
                    <span
                        class="px-4 py-2 rounded-full glass text-sm font-medium border border-white/10"
                    >
                        {tag}
                    </span>
                {/each}
            </div>
        </div>

        <!-- Project Image Placeholder -->
        <div
            class="aspect-video bg-gradient-to-br from-primary-900/50 to-accent-900/50 rounded-2xl mb-12 overflow-hidden glass"
        >
            <div
                class="w-full h-full flex items-center justify-center text-slate-500"
            >
                <svg
                    class="w-24 h-24"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
            </div>
        </div>
    </div>
</section>

<!-- Project Body (Markdown Content) -->
<section class="container mx-auto px-6 pb-20">
    <div class="max-w-4xl mx-auto">
        <article
            class="prose prose-invert prose-lg max-w-none
			prose-headings:font-display prose-headings:gradient-text
			prose-p:text-slate-300 prose-p:leading-relaxed
			prose-a:text-primary-400 prose-a:no-underline hover:prose-a:text-primary-300
			prose-strong:text-white prose-strong:font-semibold
			prose-code:text-accent-400 prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded
			prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10
			prose-ul:text-slate-300 prose-ol:text-slate-300
			prose-li:marker:text-primary-400
			prose-blockquote:border-l-primary-500 prose-blockquote:text-slate-400
			prose-img:rounded-xl prose-img:shadow-2xl"
        >
            {#if Content}
                <Content />
            {:else}
                <div class="card">
                    <h2 class="text-3xl font-display font-bold mb-4">
                        About This Project
                    </h2>
                    <p class="text-slate-300 mb-4">
                        This project showcases modern UI/UX design principles
                        with a focus on user experience and visual aesthetics.
                    </p>
                    <h3 class="text-2xl font-display font-bold mb-3 mt-8">
                        Key Features
                    </h3>
                    <ul class="space-y-2 text-slate-300">
                        <li>Intuitive user interface design</li>
                        <li>Responsive layouts for all devices</li>
                        <li>Accessibility-first approach</li>
                        <li>Modern design patterns and interactions</li>
                    </ul>
                    <h3 class="text-2xl font-display font-bold mb-3 mt-8">
                        Design Process
                    </h3>
                    <p class="text-slate-300 mb-4">
                        The design process involved extensive user research,
                        wireframing, prototyping, and user testing to ensure the
                        final product meets user needs and business goals.
                    </p>
                </div>
            {/if}
        </article>
    </div>
</section>

<!-- Navigation Section -->
<section class="container mx-auto px-6 pb-20">
    <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-6">
            {#if previousProject}
                <a
                    href="{base}/projects/{previousProject.id}"
                    class="card group"
                >
                    <div class="flex items-center gap-4">
                        <div class="flex-shrink-0">
                            <svg
                                class="w-8 h-8 text-primary-400 group-hover:-translate-x-2 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                        </div>
                        <div>
                            <div class="text-sm text-slate-400 mb-1">
                                Previous Project
                            </div>
                            <div
                                class="text-xl font-display font-bold group-hover:text-primary-400 transition-colors"
                            >
                                {previousProject.title}
                            </div>
                        </div>
                    </div>
                </a>
            {:else}
                <div></div>
            {/if}

            {#if nextProject}
                <a
                    href="{base}/projects/{nextProject.id}"
                    class="card group text-right"
                >
                    <div class="flex items-center gap-4 justify-end">
                        <div>
                            <div class="text-sm text-slate-400 mb-1">
                                Next Project
                            </div>
                            <div
                                class="text-xl font-display font-bold group-hover:text-primary-400 transition-colors"
                            >
                                {nextProject.title}
                            </div>
                        </div>
                        <div class="flex-shrink-0">
                            <svg
                                class="w-8 h-8 text-primary-400 group-hover:translate-x-2 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </div>
                    </div>
                </a>
            {/if}
        </div>
    </div>
</section>
