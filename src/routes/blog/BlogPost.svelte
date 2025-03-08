<!-- BlogPost.svelte -->
<script lang="ts">
    export let title = '블로그 제목';
    export let date = '2024-03-05';
    export let author = '작성자';
    export let featuredImage = '/path/to/default-image.jpg';
    export let content = '';
    export let tags: string[] = []; // 문자열 배열로 타입 지정
  </script>
  
  <div class="blog-post-container">
    <article class="blog-post">
      <!-- 헤더 섹션 -->
      <header class="post-header">
        <h1>{title}</h1>
        <div class="post-meta">
          <span class="author">작성자: {author}</span>
          <span class="date">작성일: {date}</span>
        </div>
      </header>
  
      <!-- 대표 이미지 -->
      <figure class="featured-image">
        <img src={featuredImage} alt={title} />
      </figure>
  
      <!-- 본문 내용 -->
      <div class="post-content">
        {@html content}
      </div>
  
      <!-- 코드 블록 예시 -->
            <pre><code>
      // 예시 코드 블록
      function exampleCode() {
          console.log('Hello, Svelte Blog!')
      }
            </code></pre>
  
      <!-- 태그 섹션 -->
      {#if tags.length > 0}
        <div class="tags">
          {#each tags as tag}
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
  
    pre {
      background-color: #f4f4f4;
      padding: 1rem;
      border-radius: 5px;
      overflow-x: auto;
    }
  
    .tags {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
    }
  
    .tag {
      background-color: #f0f0f0;
      padding: 0.3rem 0.6rem;
      border-radius: 20px;
      font-size: 0.8rem;
    }
  </style>