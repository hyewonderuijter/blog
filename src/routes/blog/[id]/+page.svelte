<script>
    export let data;
    const { post } = data;
  </script>
  
  <div class="blog-post-container">
    <article class="blog-post">
      <!-- 헤더 섹션 -->
      <header class="post-header">
        <h1>{post.title}</h1>
        <div class="post-meta">
          <span class="author">작성자: {post.author}</span>
          <span class="date">작성일: {post.date}</span>
        </div>
      </header>
  
      <!-- 대표 이미지 -->
      <figure class="featured-image">
        <img src={post.featuredImage} alt={post.title} />
      </figure>
  
      <!-- 본문 내용 -->
      <div class="post-content">
        {@html post.content}
      </div>
  
      <!-- 태그 섹션 -->
      {#if post.tags.length > 0}
        <div class="tags">
          {#each post.tags as tag}
            <span class="tag">#{tag}</span>
          {/each}
        </div>
      {/if}
    </article>
  </div>
  
  <style>
    .blog-post-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      line-height: 1.6;
    }
  
    .post-header {
      margin-bottom: 2rem;
      text-align: center;
    }
  
    .post-header h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
  
    .post-meta {
      color: #666;
      font-size: 0.9rem;
    }
  
    .featured-image {
      width: 100%;
      margin-bottom: 2rem;
    }
  
    .featured-image img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  
    .post-content {
      margin-bottom: 2rem;
    }
  
    .tags {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
      justify-content: center;
    }
  
    .tag {
      background-color: #f0f0f0;
      padding: 0.3rem 0.6rem;
      border-radius: 20px;
      font-size: 0.8rem;
    }
  </style>