<!-- contact/+page.svelte -->
<script lang="ts">
    import { onMount } from "svelte";

    // @ts-ignore
    import AOS from 'aos';

    onMount(() => {
        AOS.init();
    });
</script>

<main>
    <h1 class="title poppins-bold">Let's get in touch!</h1>
    <div class="main container poppins-regular">
        <div data-aos="fade-right" data-aos-duration="1300">
            <img src="contact.png" alt="profile of Hyewon" class="contact-img">
        </div>
        <div data-aos="fade-left" data-aos-duration="1300">
            <div class="textarea">
                <p class="first-para">I'm a <strong>creative developer</strong> based in the Netherlands 🇳🇱<br/> I create, showcase remarkable design discoveries, and explore the continuous innovation that drives web development forward. </p>
                <p class="second-para">The web is a constantly evolving platform, and that deeply resonates with me. This blog is a space where I share insights, lessons learned, and how I achieve my goals in my development journey.</p>
            </div>
        </div>
    </div>
</main>

<style>
    main {
            margin-top: 6rem;
            width: 100vw;
        }

    .container {
        margin: 0 auto;
        max-width: 80vw;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .title {
        text-align: center;
        font-size: 3rem;
        margin: 0;
    }

    p {
        font-size: 1.1rem;
    }

</style>