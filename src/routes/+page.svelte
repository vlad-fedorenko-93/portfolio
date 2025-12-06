<script lang="ts">
    import Hero from "$lib/sections/Hero.svelte";
    import About from "$lib/sections/About.svelte";
    import Projects from "$lib/sections/Projects.svelte";
    import Contact from "$lib/sections/Contact.svelte";
</script>

<svelte:head>
    <title>UI/UX Designer Portfolio</title>
    <meta
        name="description"
        content="Creative UI/UX designer specializing in modern, user-centered digital experiences"
    />
</svelte:head>

<!-- Hero Section -->
<Hero />

<!-- About Section -->
<About />

<!-- Projects Grid -->
<Projects />

<!-- Contact Form -->
<Contact />
