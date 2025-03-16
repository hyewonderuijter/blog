<!-- src/routes/blog/[id]/posts/Post1.svelte -->
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
        <li><a href="#diving-into-my-first-framework-why-svelte">Diving into My First Framework: Why Svelte?</a></li>
        <li><a href="#what-is-svelte">What is Svelte?</a></li>
        <li><a href="#svelte-vs-sveltekit">Svelte vs Sveltekit</a></li>
        <li><a href="#core-concepts-of-sveltekit">Core Concepts of Sveltekit</a></li>
        <li><a href="#routing">Routing</a></li>
        <li><a href="#conclusion">Conclusion</a></li>
        <li><a href="#reference">Reference</a></li>
        
      </ul>
    </nav>
  </div>
    <div class="right-container">
      <div class="border-left">
        <h1 class="main-title poppins-bold">Why I Started Using Svelte <br/>(And You Might Too)</h1>
        <div class="img-container main-img">
          <img src="https://hyewonim.com/static/svelte-blog.png" alt="Main of Post1" />
        </div>

        <div class="text-container">
          <h2 id="diving-into-my-first-framework-why-svelte" class="poppins-semibold">Diving into My First Framework: Why Svelte?</h2>
          <p>A few months ago, I had just finished learning HTML, CSS, and JavaScript. As I started thinking about how to build real projects, I realized that writing everything from scratch would be inefficient. That’s when I discovered frameworks.</p>
          <p>A framework provides a structured way to develop applications. Instead of manually coding everything, developers can follow a predefined architecture, which makes the process faster and more efficient.</p>
          <p>As I explored different frameworks, two names kept appearing: React and Vue.js. Both are widely used, have large communities, and offer powerful features. At first, I was torn between them. However, after more research, I chose Svelte as my first framework.</p>
          <p>I, personally, felt Svelte was more intuitive because it removes much of the complexity that comes with other frameworks. With React and Vue, I needed to understand concepts such as virtual DOM and state management. However, Svelte allowed me to write plain JavaScript in a reactive way, making it easier to grasp. The syntax is clean and easy to understand, with a more intuitive structure compared to other frameworks. I didn’t have to deal with a lot of boilerplate code, as Svelte allows me to write reactive logic directly within <code>&lt;script&gt;</code> without extra setup. This made it feel much more beginner-friendly.</p>

        <h2 id="what-is-svelte" class="poppins-semibold">What is Svelte?</h2>
        <p>Svelte is a framework for building user interfaces in the web environment. Unlike other frameworks, Svelte efficiently compiles code written in HTML, CSS, and JavaScript into optimized JavaScript at build time. Unlike React and Vue.js, which use a virtual DOM during runtime, Svelte transforms the code at build time, eliminating the need for a virtual DOM.</p>
        <p>In addition to its intuitive syntax, Svelte’s reactivity feature is one of its key strengths. Other frameworks, such as React and Vue.js, require specific functions or APIs for state management. However, in Svelte, the UI updates automatically whenever a variable declared with let is modified. This makes Svelte a straightforward and efficient framework compared to others. It also allows data inside arrays and objects to be reactive, but more complex data structures, such as Set and Map, do not update reactively by default.</p>
        <p>The structure of a Svelte component is as follows: it consists of three main parts—<code>&lt;script&gt;</code>, markup (HTML-like structure), and <code>&lt;style&gt;</code>. The <code>&lt;script&gt;</code> block handles logic and state, the markup defines the UI, and the <code>&lt;style&gt;</code> block contains scoped styles. This simple and modular structure makes Svelte easy to work with.</p>
        <pre><code class="language-html">
          &lt;script&gt;
            let count = 0;
          
            function increment() &#123;
              count += 1;
            &#125;
          &lt;/script&gt;
          
          &lt;button on:click=&#123;increment&#125;&gt;Click Me&lt;/button&gt;
          &lt;p&gt;Count: &#123;count&#125;&lt;/p&gt;
          
          &lt;style&gt;
            button &#123;
              background-color: #ff3e00;
              color: white;
              border: none;
              padding: 10px 15px;
              font-size: 16px;
              cursor: pointer;
            &#125;
          &lt;/style&gt;
          </code></pre>
          
        <h2 id="svelte-vs-sveltekit" class="poppins-semibold">Svelte vs SvelteKit</h2>
        <p>Svelte is a framework designed specifically for building user interfaces. It focuses on writing components, making development fast and efficient. However, it does not provide built-in features for structuring an entire web application.</p>
        <p>On the other hand, Sveltekit is a full-fledged framework for building complete web applications. It includes essential features such as routing, server-side rendering (SSR), static site generation (SSG), and API handling. Sveltekit extends Svelte, offering all the tools needed to develop complex applications efficiently.</p>

        <h2 id="core-concepts-of-sveltekit" class="poppins-semibold">Core Concepts of SvelteKit</h2>
          <p>A SvelteKit project consists of the following directories and files:</p>
          <div class="md-file">
            <pre><code class="language-svelte">my-project/
              ├── src/
              │   ├── lib/
              │   │   ├── server/      # Server-only library files
              │   │   └── [your lib files]
              │   ├── params/          # URL parameter matchers
              │   │   └── [your param matchers]
              │   ├── routes/          # Application routes
              │   │   └── [your routes]
              │   ├── app.html         # Main HTML template
              │   ├── error.html       # Error page template
              │   ├── hooks.client.js  # Client-side hooks
              │   ├── hooks.server.js  # Server-side hooks
              │   └── service-worker.js # Service worker
              ├── static/              # Static assets (e.g., robots.txt, favicon.png)
              │   └── [your static assets]
              ├── tests/               # Test files (if Playwright is enabled)
              │   └── [your tests]
              ├── package.json         # Project metadata & dependencies
              ├── svelte.config.js     # SvelteKit configuration
              ├── tsconfig.json        # TypeScript configuration
              └── vite.config.js       # Vite configuration
            </code></pre>
          </div>
          <p>SvelteKit is fundamentally based on Vite and provides a structure for building complete web applications, including UI components (`src/lib/`), pages (`src/routes/`), static assets (`static/`), and server-side code (`lib/server/`).</p>
          
          <h2 id="routing" class="poppins-semibold">Routing</h2>
          <p>The official Svelte website describes it as follows: 'At the heart of SvelteKit is a filesystem-based router.' In other words, the project's directory structure directly determines the application's URL paths.</p>
          <h3>Basic Rules of Routing</h3>
          <ul>
              <li><code>src/routes/</code> → Root route of the application</li>
              <li><code>src/routes/about/</code> → Generates the <code>/about</code> page route</li>
              <li><code>src/routes/blog/[slug]/</code> → Creates a dynamic route for <code>/blog/[slug]</code></li>
          </ul>
          <p>Square brackets <code>[]</code> allow developers to handle URL parameters dynamically.</p>
          <h3>Key Route Files (+ Prefix)</h3>
          <p>In SvelteKit, certain route files are prefixed with <code>+</code> to define routing functionality.</p>
          <ul>
            <li><code>+page.svelte</code> → Defines the page component (UI)</li>
            <li><code>+page.js</code> → Contains the <code>load()</code> function to fetch data for the page</li>
            <li><code>+page.server.js</code> → Contains the <code>load()</code> function to fetch server-side data for a specific page</li>
            <li><code>+layout.svelte</code> → Defines a shared page layout (e.g., nav, footer)</li>
            <li><code>+layout.js</code> → Fetches layout-specific data</li>
            <li><code>+layout.server.js</code> → Fetches server-side layout data</li>
            <li><code>+error.svelte</code> → Custom error page for the route</li>
            <li><code>+server.js</code> → Defines an API endpoint (supports <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code>)</li>
          </ul>

          <h2 id="conclusion" class="poppins-semibold">Conclusion</h2>
          <p>So far, I have explored the core concepts of Svelte and SvelteKit, gaining a deeper understanding of how they work throughout this journey. Initially, just reading the documentation didn’t give me a full grasp of the concepts, but once I have started applying them in my actual projects, I realized how intuitive and simple they really are. Writing about what I’ve learned has further reinforced my understanding, making everything feel even clearer.</p>
          <p>In the next post, I will share how I applied SvelteKit to build my own project and the challenges I encountered along the way. Stay tuned! 🛎️</p>
          <h2 id="reference" class="poppins-regular">Reference</h2>
          <p><a href="https://svelte.dev/docs">🌐 Svelte Website</a></p>
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
    border-radius: 10px;
    overflow: auto;
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
    overflow: hidden;
    border-radius: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .main-img {
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

  pre, code {
    font-size: 1rem;
    line-height: 1.5;
  }

  </style>
  