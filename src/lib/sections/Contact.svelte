<script lang="ts">
    import { onMount } from "svelte";

    let form: HTMLFormElement;

    function handleSubmit() {
        const hcaptcha = (window as any).hcaptcha;
        if (hcaptcha) {
            hcaptcha.execute();
        }
    }

    function onCaptchaSuccess() {
        if (form) {
            form.submit();
        }
    }

    onMount(() => {
        (window as any).onCaptchaSuccess = onCaptchaSuccess;
    });
</script>

<section id="contact" class="container mx-auto px-6 py-20">
    <div class="max-w-2xl mx-auto">
        <div class="text-center mb-12">
            <h2 class="section-title">Let's Work Together</h2>
            <p class="text-xl text-slate-400">
                Have a project in mind? Let's discuss how I can help.
            </p>
        </div>

        <form
            bind:this={form}
            class="form-card space-y-6 flex flex-col gap-2"
            action="https://api.web3forms.com/submit"
            method="POST"
            on:submit|preventDefault={handleSubmit}
        >   
            <input
                class="border border-white/10 rounded-xl p-4"
                type="hidden"
                name="access_key"
                value="fe9d83ca-1bff-4adc-9fc5-fc2d649fe440"
            />
            <label for="name">Name</label>
            <input
                class="border border-white/10 rounded-xl p-4 mb-4"
                type="text"
                name="name"
                placeholder="Your name"
                required
            />
            <label for="name">Email</label>
            <input
                class="border border-white/10 rounded-xl p-4 mb-4"
                type="email"
                name="email"
                placeholder="Your email"
                required
            />
            <label for="name">You message</label>
            <textarea
                class="border border-white/10 rounded-xl h-48 p-4"
                name="message"
                placeholder="Write what's on your mind..."
                required
            ></textarea>
            <div
                class="h-captcha mb-0"
                data-captcha="true"
                data-size="invisible"
                data-callback="onCaptchaSuccess"
            ></div>
            <button class="btn-primary" type="submit">Submit</button>
        </form>
    </div>
</section>

<style>
    .form-card {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        padding: 1.5rem;
        transition: all 0.3s;
    }

    label {
        font-size: 1.15rem;
        font-weight: 600;
        margin-bottom: 0.2rem;

    }

    textarea {
        resize: none;
    }


</style>
