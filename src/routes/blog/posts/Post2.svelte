<!-- src/routes/blog/[id]/posts/Post2.svelte -->
<main>
  <div class="left-container index-table">
    <p class="index-title poppins-semibold">Table of Contents</p>
    <nav>
      <ul class="index-list poppins-light">
        <li><a href="#a-special-gift-for-my-best-friend">A Special Gift for My Best Friend</a></li>

        <li><a href="#what-is-svelte">1. Creating the Paper Invitation</a></li>
        <li><a href="#website-mockup-design">2. Website Mockup Design</a></li>
        <li><a href="#turning-the-mockup-into-a-real-website">3. Turning the Mockup into a Real Website</a></li>
        <li><a href="#challenges">4. Challenges & Solutions</a></li>

        <li><a href="#conclusion">Conclusion</a></li>
      </ul>
    </nav>
  </div>
    <div class="right-container">
      <div class="border-left">
        <h1 class="main-title poppins-bold">Building My First Svelte Project: <br/>A Wedding Invitation Website</h1>
        <div class="img-container main-img">
          <img src="/wedding-blog.png" alt="Main of Post1" />
          <p class="caption">See the prototype <a href="https://yejeongandhakrim.pages.dev" class="prototype-link">here</a></p>
      </div>
      
      <div class="text-container">
        <h2 id="a-special-gift-for-my-best-friend" class="poppins-semibold">A Special Gift for My Best Friend</h2>
        <p>I was told that my best friend Ella, who currently lives in South Korea, is getting married. We have been friends since we were seven years old. I would love to attend her wedding but the fact that I can’t be there for her due to the distance and my own schedule makes me sad. Instead of attending in person, I decided to give her a special gift as her best friend: a wedding invitation card and a website!</p>
        <p>It is quite common to share wedding invitations both through a paper invitation card and a website. Many couples prefer this approach as it allows them to combine tradition with convenience. While paper invitations maintain a classic and elegant touch, digital invitations provide easy access and instant updates for guests.</p>
        <p>Additionally, digital invitations are convenient for guests, as it is common to give money as a wedding gift to celebrate the couple. This makes it easier to include important details such as the bank account number and the account holder’s name.</p>
        <p>With these things in mind, I felt confident that this was a project I could handle as a beginner since it only required simple features. However, I was shocked to find that these companies charge a significant amount of money despite the simplicity of their designs and website features.</p>

        <h2 id="creating-the-paper-invitation" class="poppins-semibold">Step 1. Creating the Paper Invitation</h2>
        <div class="img-container text-img">
          <img src="/paper-card.png" alt="Descriptive pic of the card invitation">
          <p class="caption">© Hyewon Im</p>
        </div>
        <p>I first designed the paper invitation card using Canva. To keep it elegant yet minimal, I utilized free open-source illustrations and carefully selected fonts that matched the wedding theme. The design process involved experimenting with different layouts, colors, and typography to achieve a warm and inviting feel.</p>
        
        <h2 id="website-mockup-design" class="poppins-semibold">Step 2. Website Mockup Design</h2>
        <div class="img-container text-img">
          <img src="/mockup.png" alt="Descriptive pic of mockup design">
          <p class="caption">© Hyewon Im</p>
        </div>
        <p>Before creating the mockup design, I discussed the necessary features with Ella and finalized the sitemap. Since the website didn’t require many built-in features or multiple pages, I decided to go with a single-page scrollable layout containing the following sections:</p>
        <ul>
            <li>Hero section</li>
            <li>Introduction (photo + short invitation message)</li>
            <li>Gallery</li>
            <li>Wedding date & countdown</li>
            <li>Venue details & directions (incl. map)</li>
            <li>Bank account information (incl. buttons which can copy bank account)</li>
            <li>Footer (incl. a copy link function)</li>
        </ul>
        <p>Given that the website would be accessed on both smartphones and desktop browsers, I prioritized responsiveness to ensure a seamless experience across different screen sizes. Taking all these factors into account, I proceeded with the mockup design using Figma.</p>

        <h2 id="#turning-the-mockup-into-a-real-website" class="poppins-semibold">Step 3. Turning the Mockup into a Real Website</h2>
          <p>To begin the development process, I set up the project using <strong>Svelte</strong> and configured the environment with <strong>pnpm</strong> as the package manager. Since Svelte is lightweight and optimized for performance, it was a great choice for this single-page wedding invitation website. I chose pnpm over npm or yarn because it is faster, more efficient in disk space usage, and provides better dependency management. Unlike npm, pnpm uses a global store for packages, preventing unnecessary duplication and speeding up installation, making it an ideal choice for managing dependencies in this project.</p>
          
          <h3>Key Features I Built</h3>
          <h4>1. Photo gallery</h4>
          <p>I implemented an interactive gallery feature, allowing users to click on thumbnails to view larger images. This was achieved by dynamically updating the main image's source when a thumbnail is clicked.</p>
          <pre><code class="language-javascript language-html">
    &lt;script lang="ts"&gt;
    
        let currentImageIndex = 0;

        function changeImage(index: number) &lt;
                currentImageIndex = index;
            &gt;
    &lt;/script&gt;

    &lt;main&gt;
        /.../
        &lt;div class="container"&gt;
            &lt;div class="main-image"&gt;
                &lt;img src=&lt;images[currentImageIndex]&gt; alt="Showing Images on Thumbnail" loading="lazy"/&gt;
            &lt;/div&gt;

            &lt;div class="thumbnails"&gt;
                &lt;#each images as image, index&gt;
                  &lt;button class="thumbnail" on:click=&lt;() =&gt; &lt; currentImageIndex = index;&gt;&gt;&gt;
                      &lt;img src=&lt;image.replace('.png', '-button.png')&gt alt=&lt;`Thumbnail $&lt;index + 1&gt;`&gt; loading="lazy"/&gt;
                  &lt;/button&gt;
                &lt;/each&gt;
            &lt;/div&gt;
    &lt;/main&gt;
          </code></pre>
        
            
          
          <h2 id="#challenges" class="poppins-semibold">Step 4. Challenges & Solutions</h2>
          <h3>1. The Struggle with Large Image Files</h3>
          <p>During development, I encountered issues with **image quality and file size**. The original PNG images were too large, causing slow loading times, especially on mobile devices. Additionally, reducing the file size manually often led to a noticeable loss in image quality, making it difficult to balance performance and visual clarity.</p>
          <p>To optimize images for the website, I used a <strong>shell script (convert.sh)</strong> to automatically convert all PNG files into WebP format. This format compresses images to 50% quality and saves them as WebP thumnails (-button.webp). This significantly reduces file sizes, improving website performance while maintaining good image quality.</p>

          <h2 id="conclusion" class="poppins-semibold">Conclusion</h2>
          <p>So far, I have explored the core concepts of Svelte and SvelteKit, gaining a deeper understanding of how they work throughout this journey. Initially, just reading the documentation didn’t give me a full grasp of the concepts, but once I have started applying them in my actual projects, I realized how intuitive and simple they really are. Writing about what I’ve learned has further reinforced my understanding, making everything feel even clearer.</p>
          <p>In the next post, I will share how I applied SvelteKit to build my own project and the challenges I encountered along the way. Stay tuned! 🛎️</p>
          
        </div>
      </div>
    </div>
</main>
  
<style>
  /* Universal Setting */
  main {
    max-width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    font-family: 'poppins';
  }

  .left-container {
    width: 20vw; 
  }

  .right-container {
    width: 80vw;
  }

  .border-left {
    border-left: 1px solid #fff;
  }
  
  .img-container, .text-container {
    width: 80%;     /* Total width of contents */
    margin: 0 auto;
  }

  pre {
    max-width: 80vw;
    overflow: auto;
    border-radius: 10px;
  }

  /* Ensure consistent top margin across pages */
  .main-title, .index-title {
    margin-top: 6rem;
  }
  
  /* Index Style */
  a {
    text-decoration: none;
    color: #303030;
  }

  .index-title {
    font-size: 1.2rem;
    margin-left: 2.5rem;
  }

  .index-list {
    list-style: none;
  }

  .index-list > li {
    margin: 1rem 2rem 1rem 1.5rem;
    font-size: 1.2rem;
    line-height: 1.5;
    color: #888888;
  }

  li:focus, li:hover {
    text-decoration: underline;
    transition: text-decoration 0.5s ease;
  }

  /* Main Title Styling */
  .main-title {
    font-size: 3rem;
    text-align: center;
  }
  
  /* Image */
  .img-container {
    height: 50vh;
    border-radius: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    pointer-events: none;
    -webkit-user-drag: none;
  }

  .caption {
    text-align: center;
    font-size: 14px;
    color: #666;
    margin-top: 5px;
  }

  .prototype-link {
    color: #ff5500;
  }

  .main-img {
    margin-bottom: 6rem;
    object-position: 50% 80%;
  }

  .text-img {
    width: 100%;
    margin-bottom: 6rem;
  }


  /* Textarea - Font Size */
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 2;
  }

  pre {
    font-size: 1rem;
    line-height: 1.5;
  }

</style>