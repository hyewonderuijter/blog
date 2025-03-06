<!-- src/routes/blog/+page.svelte -->
<script>
  import { blogPosts } from '$lib/stores/blogStore';
  import { onMount } from "svelte";

  // @ts-ignore
  import AOS from 'aos';

  let posts = []; // blogPosts 데이터를 저장할 변수

  // 스토어 구독
  blogPosts.subscribe(value => {
    posts = value; // 스토어 데이터를 posts에 저장
  });

  onMount(() => {
    AOS.init();
  });
</script>

<div class="blog-page">
  <h1 class="main-title poppins-bold">Blog</h1>
  <div data-aos="fade-up" data-aos-duration="1500">
    <div class="blog-container">
      {#each posts as post}
        <div class="blog-card">
          <a href={`/blog/${post.id}`}>
            <div class="card-image">
              <img src={post.featuredImage} alt={post.title} />
            </div>
            <div class="card-content">
              <h2 class="card-title">{post.title}</h2>
              <p class="card-excerpt">{post.excerpt}</p>
              <div class="tags">
                {#each post.tags as tag}
                  <span class="tag">#{tag}</span>
                {/each}
              </div>              
              <div class="card-footer">
                <span class="date">{post.date}</span>
                <span class="author">{post.author}</span>
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>
  
  <style>
    .blog-page {
      max-width: 80vw;
      margin: 0 auto;
    }
  
    .main-title {
        margin-top: 6rem; /* Same height as other pages */
      text-align: center;
      margin-bottom: 2rem;
      font-size: 3rem;
    }
  
    .blog-container {
      display: flex;
      flex-direction: column-reverse;
      gap: 2rem;
    }
  
    .blog-card {
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .blog-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
  
    .blog-card a {
      text-decoration: none;
      color: inherit;
    }
  
    .card-image {
      width: 100%;
      height: 60vh;
      margin: 0 auto;
      overflow: hidden;

    }
  
    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  
    .blog-card:hover {
      transform: scale(1.05);
    }
  
    .card-content {
        width: 95%;
        margin: 0 auto;
        padding-bottom: 1rem;
    }

    .card-title {
        font-size: 2rem;
        margin-bottom: 0;
    }
  
    .card-excerpt {
      color: #666;
      font-size: 1.1rem;
      margin-bottom: 0;
    }

    .tags {
      display: flex;
      gap: 0.75rem;
      margin: 1rem 0;
    }
  
    .tag {
      background-color: rgba(255, 255, 255, 0.6);
      padding: .5rem 1rem;
      border-radius: 10px;
      font-size: 1rem;
    }
  
    .card-footer {
      display: flex;
      justify-content: space-between;
      color: #888;
      font-size: 1rem;
      margin: .5rem 0; /* top - right - bottom -left */
    }
  </style>