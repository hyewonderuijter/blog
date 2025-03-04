<!-- Main Page  -->
<script lang="ts">
    import { onMount } from "svelte";

    // @ts-ignore
    import AOS from 'aos';

    onMount(() => {
        AOS.init();
    });
</script>

<main>
    <div class="banner container poppins-regular">
            <div data-aos="fade-right" data-aos-duration="1300">
                <img src="memoji.png" alt="profile of Hyewon">
            </div>
            <div data-aos="fade-left" data-aos-duration="1300">
                <div class="textarea">
                    <h1>Hello, I'm Hyewon!</h1>
                    <p>I'm a creative developer based in the Netherlands. I create, showcase remarkable design discoveries, and explore the continuous innovation that drives web development forward. </p>
                    <p>The web is a constantly evolving platform, and that deeply resonates with me. This blog is a space where I share insights, lessons learned, and how I achieve my goals in my development journey.</p>
                </div>
            </div>
    </div>
</main>

<style>
    main {
            background-color: rgba(255, 255, 255, 0.2);
            width: 100vw;
        }

    .container {
        margin: 0 auto;
        max-width: 80vw;
    }

    .banner {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        margin: 0 auto;
        gap: 100px;
    }

    img {
        width: 450px;
    }

    h1 {
        font-size: 3rem;
    }

    p {
        font-size: 1.1rem;
    }

</style>