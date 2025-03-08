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
                <p class="first-para">Whether you have an exciting project in mind or simply want to connect, just click on the icons below to get in touch with me!</p>
                <div class="icon-list">
                    <a href="mailto:hyewon.im@icloud.com">
                        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/new-post.png" class="icon" alt="new-post"/>
                    </a>
                    <a href="https://github.com/hyewonderuijter"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github" class="icon"/></a>
                    <a href="http://improvisus.net"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/domain.png" alt="domain" class="icon"/></a>
                    <a href="https://www.linkedin.com/in/hyewonim/"><img width="30" height="30" class="icon" src="https://img.icons8.com/ios-glyphs/30/linkedin.png" alt="linkedin"/></a>
                </div>
                <p class="second-para">I also run a one-person web design agency, where creativity meets precision. Curious to know more? Check out <a href="https://improvisus.net">my website</a>.<br/> If you’d like to learn more about my experience, feel free to view my resume by clicking <a href="https://www.icloud.com/iclouddrive/0d9UAqtUGT2rYJjKz2rzygfIA#CV">here</a>.</p>

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

    .textarea {
        max-width: 45vw;
    }

    p {
        font-size: 1.2rem;
    }

    .icon-list {
        display: flex;
        gap: 20px;
    }

    .icon:hover, .icon:focus, .icon:active {
        transform: scale(1.2);
        transition: transform 0.5s ease;
    }

    .second-para > a {
        text-decoration: none;
        color: orangered;
    }

</style>