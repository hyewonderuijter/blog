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
                <img src="memoji.png" alt="profile of Hyewon" class="main-profile-img">
            </div>
            <div data-aos="fade-left" data-aos-duration="1300">
                <div class="textarea">
                    <h1 class="title">Hello, I'm Hyewon!</h1>
                    <p class="first-para">I'm a <strong>creative developer</strong> based in the Netherlands 🇳🇱<br/> I create, showcase remarkable design discoveries, and explore the continuous innovation that drives web development forward. </p>
                    <p class="second-para">The web is a constantly evolving platform, and that deeply resonates with me. This blog is a space where I share insights, lessons learned, and how I achieve my goals in my development journey.</p>
                </div>
                <div class="icon-list">
                    <a href="https://github.com/hyewonderuijter"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github" class="icon"/></a>
                    <a href="http://improvisus.net"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/domain.png" alt="domain" class="icon"/></a>
                    <a href="https://www.linkedin.com/in/hyewonim/"><img width="30" height="30" class="icon" src="https://img.icons8.com/ios-glyphs/30/linkedin.png" alt="linkedin"/></a>
                </div>
            </div>
    </div>
</main>

<style>
    main {
            margin-top: 6rem;
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

    .main-profile-img {
        width: 450px;
    }

    .title {
        font-size: 3rem;
        margin: 0;
    }

    p {
        font-size: 1.1rem;
    }

    .icon-list {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .icon:focus, .icon:hover {
        transform: scale(1.2);
        transition: transform 0.5s ease;
    }

</style>