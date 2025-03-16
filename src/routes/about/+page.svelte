<!-- About Page  -->
<script lang="ts">
    import { onMount } from "svelte";

    // @ts-ignore
    import AOS from 'aos';

    onMount(() => {
        AOS.init();
    });
</script>

<main>
    <div class="main-container poppins-regular">
        <h1 class="title poppins-bold">Wanna know about me?</h1>
            <div data-aos="fade-right" data-aos-duration="1300">
                <div class="first-story story-container">
                    <img src="https://hyewonim.com/static/nurse.png" alt="nurse with a patient" class="nurse descriptional-img">
                    <div class="textarea">
                        <h2>My Decision to Change My Path</h2>
                        <p class="first-para">My journey began in healthcare, where I completed a Bachelor of Science in Healthcare & Nursing Sciences in South Korea.</p>
                        <p class="second-para">For years, I was dedicated to my nursing career, but I often felt there was something missing — the chance to apply my passion for creating and designing something new.</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1300">
                <div class="second-story story-container">
                    <img src="https://hyewonim.com/static/developer.png" alt="nurse with a patient" class="developer descriptional-img">
                    <div class="textarea">
                        <h2>Finding My Path in Development</h2>
                        <p class="first-para">Moving to the Netherlands for my relationship allowed me to pursue my dream in development, fueling my passion for creating innovative and visually compelling digital experiences.</p>
                        <p class="second-para">I've explored new technologies, from <strong>HTML/CSS/JavaScript</strong> to 3D web development using tools like <strong>Three.js and React Three Fiber</strong>.</p>
                    </div>
                </div>
            </div>
    </div>
</main>

<style>
    main {
            margin-top: 6rem;
            width: 100vw;
        }

    .main-container {
        margin: 0 auto;
    }

    .title {
        text-align: center;
        margin-bottom: 5rem;
    }

    .story-container {
        background-color: rgba(255, 255, 255, 0.2);
        width: 80vw;
        display: flex;
        align-items: center;
        margin-top: 2rem;
    }

    .first-story {
        margin-left: 0;
        flex-direction: row;
    }

    .second-story {
        margin-left: auto;
        padding-left: 1.5rem;
        flex-direction: row-reverse;
    }

    .textarea {
        display: flex;
        flex-direction: column;
        max-width: 45vw;
        font-size: 1.2rem;
    }

    .descriptional-img {
        width: 450px;
    }

    .developer {
        margin-right: 2rem;
    }

    h1 {
        font-size: 3rem;
        margin-bottom: 0;
    }

    p {
        font-size: 1.1rem;
    }

    .first-para {
        margin-right: 2rem;
    }

</style>