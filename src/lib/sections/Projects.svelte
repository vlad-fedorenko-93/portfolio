<script lang="ts">
    import { projects } from "$lib/projects";
</script>

<section id="projects" class="container mx-auto px-6 py-20">
    <div class="text-center mb-16">
        <h2 class="section-title">Featured Projects</h2>
        <p class="text-xl text-slate-400">A selection of my recent work</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each projects.filter((p) => p.featured) as project}
            <a href="/projects/{project.id}" class="group card overflow-hidden">
                <div
                    class="aspect-video bg-gradient-to-br from-primary-900/50 to-accent-900/50 rounded-xl mb-4 overflow-hidden"
                >
                    <div
                        class="w-full h-full flex items-center justify-center text-slate-500 group-hover:scale-110 transition-transform duration-500"
                    >
                        <svg
                            class="w-16 h-16"
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
                <h3
                    class="text-2xl font-display font-bold mb-2 group-hover:text-white transition-colors"
                >
                    {project.title}
                </h3>
                <p class="text-slate-400 mb-4">{project.description}</p>
                <div class="flex flex-wrap gap-2">
                    {#each project.tags as tag}
                        <span
                            class="px-3 py-1 rounded-full bg-white/5 text-sm text-slate-300 border border-white/10"
                        >
                            {tag}
                        </span>
                    {/each}
                </div>
            </a>
        {/each}
    </div>
</section>