<!-- src/routes/blog/[id]/posts/Post2.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import Prism from "prismjs";

  onMount(() => {
      setTimeout(() => {
          Prism.highlightAll();
      }, 100);
  });
</script>

<main>
  <div class="left-container index-table">
    <p class="index-title poppins-semibold">Table of Contents</p>
    <nav>
      <ul class="index-list poppins-light">
        <li><a href="#a-special-gift-for-my-best-friend">A Special Gift for My Best Friend</a></li>
        <li><a href="#creating-the-paper-invitation">1. Creating the Paper Invitation</a></li>
        <li><a href="#website-mockup-design">2. Website Mockup Design</a></li>
        <li><a href="#turning-the-mockup-into-a-real-website">3. Turning the Mockup into a Real Website</a></li>
        <li><a href="#hosting-deployment">4. Hosting & Deployment</a></li>
        <li><a href="#reflection">Reflection</a></li>
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

        <h2 id="creating-the-paper-invitation" class="heading poppins-semibold">Step 1. Creating the Paper Invitation</h2>
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

        <h2 id="turning-the-mockup-into-a-real-website" class="poppins-semibold">
          Step 3. Turning the Mockup into a Real Website
        </h2>        
          <p>To begin the development process, I set up the project using <strong>Svelte</strong> and configured the environment with <strong>pnpm</strong> as the package manager. Since Svelte is lightweight and optimized for performance, it was a great choice for this single-page wedding invitation website. I chose pnpm over npm or yarn because it is faster, more efficient in disk space usage, and provides better dependency management. Unlike npm, pnpm uses a global store for packages, preventing unnecessary duplication and speeding up installation, making it an ideal choice for managing dependencies in this project.</p>
          
          <h3>Key Features I Built</h3>
          <h4>1. Photo gallery</h4>
          <p>I implemented an interactive gallery feature, allowing users to click on thumbnails to view larger images. This was achieved by dynamically updating the main image's source when a thumbnail is clicked.</p>
          <pre><code class="language-html">
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
          <p>During development, I encountered an <span class="issue-in-red">issue</span> with image quality and file size. The original PNG images were too large, causing slow loading times, especially on mobile devices. Additionally, reducing the file size manually often led to a noticeable loss in image quality, making it difficult to balance performance and visual clarity. To address this, I researched different image optimization techniques to find a solution that maintains quality while improving performance.</p>
          <p><strong>Image resolution</strong>refers to the number of pixels in an image—higher resolution means more detail, while lower resolution means results in smaller file sizes but less clarity.</p>
          <p>Image compression works in two different ways:</p>
          <ul>
            <li><strong>Lossless compression</strong> retains all original data but takes longer to decompress on the client side.</li>
            <li><strong>Lossy compression</strong> reduces file size by omitting some details, making images more efficient for web usage.</li>
          </ul>
          <p>Image formats differ in quality, compression, and use cases.</p>
          <ul>
            <li><strong>PNG</strong>is high-quality and lossless but has larger file sizes. </li>
            <li><strong>JPEG</strong> uses lossy compression to balance quality and sizes. </li>
            <li><strong>WEBP</strong> offers better compression with both lossless and lossy options for optimal performance.</li>
          </ul>
          <p>Given that most of the images I used were high-quality and large in size, I decided to convert them to <strong>WEBP format</strong> for better performance and efficiency.</p>
          <pre><code class="language-html">
  /* convert.sh */
  mkdir -p webp
      for file in *.png; do
        base=$(basename "$file" .png)
        convert "$file" -quality 50 "webp/$base-button.webp"
      done
          </code></pre>
          <p>I used a <strong>shell script (convert.sh)</strong> to automatically convert all PNG files into WebP format. This format compresses images to 50% quality and saves them as WebP thumnails (-button.webp). This significantly reduces file sizes, improving website performance while maintaining good image quality.</p>
          <h4>2. Calendar & countdown</h4>
          <p>I implemented a dynamic calendar and countdown feature to highlight the wedding date and show the remaining days. The countdown updates dynamically, allowing users to see how many days are left until the wedding.</p>
          <pre><code class="language-html">
    &lt;script lang="ts"&gt;
        const year = 2025;
        const month = 2; // 0 = Jan, (...), 2 = March
        
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total dates in a specific month
        const firstDayIndex = new Date(year, month, 1).getDay(); // First day in a specific month (Sunday = 0)
        
        let dates = [];
        
        for (let i = 0; i &lt; firstDayIndex; i++) &lt;
                    dates.push('');
                    &gt;
        for (let i = 1; i &lt;= daysInMonth; i++) &lt;
                    dates.push(i);
                    &gt;
    &lt;/script&gt;
    &lt;main&gt;
        &lt;div class="calendar"&gt;
                  /.../
            &lt;div class="calendar-dates"&gt;
                &lt;#each dates as date&gt;
                   &lt;div class="date &lt;date === 22 ? 'highlight' : ''&gt;"&gt;&lt;date&gt;&lt;/div&gt;
                &lt;/each&gt;
            &lt;/div&gt;
        &lt;/div&gt;
      &lt;/main&gt;
        </code></pre>
        <h4>3. Map API Integration</h4>
        <p>Since many people in Korea prefer Naver Maps over Google Maps, I integrated the <strong><a href="https://developers.naver.com/main/">Naver Maps API</a></strong> instead. This ensures a more familiar and convenient experience for local guests, allowing them to easily find the wedding venue using Korea's widely used mapping service.</p>
        <h4>4. Bank Account Display</h4>
        <p>I integrated a <strong>Dropdown Panel</strong> to let users access the account information only when needed. I also implemented a <strong>copy-to-clipboard function</strong>, allowing users to easily copy the bank name and account number with a single click.</p>
        <h4>5. AOS Library Integration</h4>
        <p>I incorporated the <strong>AOS (Animate On Scroll) library</strong> to enhance visual transitions and improve user engagement. This allows elements to appear dynamically as users scroll through the page, creating a more immersive and visually appealing interface.</p>
        <pre><code class="language-html">
    &lt;script lang="ts"&gt;
            import &#123; onMount &#125; from 'svelte';
            import AOS from 'aos';
            import 'aos/dist/aos.css';

            onMount(() =&gt; &#123;
              AOS.init(&#123;
                duration: 1000,
                once: false
              &#125;);
            &#125;);
    &lt;/script&gt;
      </code></pre>      
        <p>I encountered an <span class="issue-in-red">issue</span> where animations wouldn't work correctly unless the library was initialized properly. To resolve this, I ensured that <code>AOS.init()</code> was executed inside <code>onMount</code>, preventing errors and ensuring the animations loaded correctly after the component was rendered.</p>

        <h2 id="hosting-deployment" class="poppins-semibold">Step 4. Hosting & Deployment</h2>
        <p>Initially, I planned to host the website on GitHub Pages (github.io) since it provides free hosting. However, I quickly encountered <span class="issue-in-red">issues</span> because GitHub Pages only support <italic>static websites</italic>.</p>
        <table>
          <thead>
              <tr>
                  <th>Category</th>
                  <th>Static Website</th>
                  <th>Dynamic Website</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><strong>Functionality</strong></td>
                  <td>Serves pre-built HTML, CSS, and JavaScript files as they are.</td>
                  <td>Generates content dynamically based on user requests and data.</td>
              </tr>
              <tr>
                  <td><strong>Server Requirement</strong></td>
                  <td>No server required, only hosting is needed.</td>
                  <td>Requires a backend server to process requests.</td>
              </tr>
              <tr>
                  <td><strong>Database</strong></td>
                  <td>Not used</td>
                  <td>Can be used</td>
              </tr>
              <tr>
                  <td><strong>Page Loading</strong></td>
                  <td>Loads the same pre-rendered content every time.</td>
                  <td>Changes content dynamically based on data or user actions.</td>
              </tr>
          </tbody>
      </table>
          <p>However, my project was built with SvelteKit, which is designed for dynamic web applications, including SSR and API integration. Because of this, it couldn't work properly on GitHub Pages.</p>
          <p>I implemented a Docker-based deployment setup with DevContainer for local development and Cloudflare for hosting.</p>
          <ul>
            <li><strong>Docker</strong> is used for universal, containerized code that runs the same everywhere, regardless of the environment.</li>
            <li><strong>DevContainer</strong> ensures everyone working on the project has the same development setup.</li>
            <li><strong>Cloudflare</strong> provides fast, scalable hosting with built-in support for both static and dynamic functionality.</li>
          </ul>
          <p>By utilizing this setup, I successfully deployed my project with full flexibility. 🎉</p>

        <h2 id="reflection" class="poppins-semibold">Reflection</h2>
        <p>This was my first project built from scratch and my first attempt at using a framework. Although it was just a single-page website and not overly complex, I still feel a sense of achievement knowing that I built it myself. I learned a lot throughout the process and realized how immersive and passionate I am about creating something on my own. This experience gave me a deeper understanding of web development and reinforced my excitement for building projects independently. 🚀</p>
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
    font-size: 1rem;
    line-height: 1.5;
    color: #888888;
  }

  .index-list>li:focus, .index-list>li:hover {
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

  /* Table Styling */
    table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
  }

  th, td {
      border: 1px solid #ddd;
      padding: 10px;
  }

  th {
      font-weight: bold;
  }

  /* Textarea - Font Size */
  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.7rem;
  }

  h4 {
    font-size: 1.3rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 2;
  }

  pre {
    font-size: 1rem;
    line-height: 1.5;
  }

  .issue-in-red {
    color: #ff5500;
  }

  p > code {
    font-style: italic;
  }

</style>